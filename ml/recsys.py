from typing import List, Dict, Any
import numpy as np
import pandas as pd
import nmslib
from sklearn.decomposition import TruncatedSVD
from collections import defaultdict
from rubert import TextEmbedder


class RecSys:
    def __init__(self, users_data: List[Dict[str, Any]], events_data: List[Dict[str, Any]]):
        self.users_data = users_data
        self.events_data = events_data
        self.embedder = TextEmbedder()
        
        self.event_ids = [event['event_id'] for event in self.events_data]
        self.event_names = [event['name'] for event in self.events_data]
        self.event_vectors = self.embedder.embed(self.event_names)
        
        self.index = nmslib.init(
            method='hnsw', 
            space='cosinesimil'
        )
        
        self.index.addDataPointBatch(self.event_vectors)
        self.index.createIndex({'post': 2}, print_progress=True)
        
        self.interaction_matrix = self.create_interaction_matrix()

        self.n_components = min(50, self.interaction_matrix.shape[1])
        self.svd = TruncatedSVD(n_components=self.n_components)
        self.user_factors = self.svd.fit_transform(self.interaction_matrix)
        self.event_factors = self.svd.components_.T

    def create_interaction_matrix(self) -> pd.DataFrame:
        user_ids = [user['user_id'] for user in self.users_data]
        event_ids = [event['event_id'] for event in self.events_data]
        
        interaction_matrix = pd.DataFrame(0, index=user_ids, columns=event_ids)
        
        for user in self.users_data:
            for fav in user['favorites']:
                event_id = next((event['event_id'] for event in self.events_data if event['name'] == fav), None)
                if event_id and event_id in interaction_matrix.columns:
                    interaction_matrix.loc[user['user_id'], event_id] = 1
                    
        return interaction_matrix
    
    def recommend_events_for_user(self, user_search_history: List[str], top_n: int = 100) -> List[str]:
        search_vectors = self.embedder.embed(user_search_history)
        mean_vector = np.mean(search_vectors, axis=0).reshape(1, -1)
        
        indices, distances = self.index.knnQuery(mean_vector, k=top_n)
        recommended_events = [self.events_data[i]['event_id'] for i in indices]
        return recommended_events
    
    def hybrid_recommendation(self, user_id: str, top_n: int = 5) -> List[str]:
        user = next(user for user in self.users_data if user['user_id'] == user_id)
        
        content_recommendations = self.recommend_events_for_user(user['search_history'], top_n)
        
        user_idx = self.interaction_matrix.index.get_loc(user_id)
        collaborative_scores = np.dot(self.user_factors[user_idx], self.event_factors.T)
        
        event_scores = {event['event_id']: collaborative_scores[i] for i, event in enumerate(self.events_data)}

        for event in self.events_data:
            if event['category'] in user['interests']:
                event_scores[event['event_id']] += 0.3

        for favorite in user['favorites']:
            favorite_event = next((event for event in self.events_data if event['name'] == favorite), None)
            if favorite_event:
                favorite_vector = self.event_vectors[self.event_ids.index(favorite_event['event_id'])].reshape(1, -1)
                indices, distances = self.index.knnQuery(favorite_vector, k=top_n)
                for i in indices:
                    event_scores[self.events_data[i]['event_id']] += 0.5

        combined_scores = defaultdict(float)
        for event_id in content_recommendations:
            combined_scores[event_id] += 0.5
        for event_id, score in event_scores.items():
            combined_scores[event_id] += score
            
        recommended_events = sorted(combined_scores.items(), key=lambda x: x[1], reverse=True)[:top_n]
        return [event[0] for event in recommended_events]
    
    def update_user(self, updated_user: Dict[str, Any]) -> None:
        user_id = updated_user['user_id']
        
        user_idx = next((i for i, user in enumerate(self.users_data) if user['user_id'] == user_id), None)
        
        if user_idx is not None:
            self.users_data[user_idx] = updated_user
            
            self.interaction_matrix.loc[user_id, :] = 0
            for fav in updated_user['favorites']:
                event_id = next((event['event_id'] for event in self.events_data if event['name'] == fav), None)
                if event_id and event_id in self.interaction_matrix.columns:
                    self.interaction_matrix.loc[user_id, event_id] = 1
            
            self.svd = TruncatedSVD(n_components=self.n_components)
            self.user_factors = self.svd.fit_transform(self.interaction_matrix)
            self.event_factors = self.svd.components_.T
        else:
            raise ValueError(f'User with ID {user_id} does not exist.')

    def add_user(self, new_user: Dict[str, Any]) -> None:
        self.users_data.append(new_user)
        
        new_row = pd.DataFrame(0, index=[new_user['user_id']], columns=self.interaction_matrix.columns)
        for fav in new_user['favorites']:
            event_id = next((event['event_id'] for event in self.events_data if event['name'] == fav), None)
            if event_id and event_id in self.interaction_matrix.columns:
                new_row.loc[new_user['user_id'], event_id] = 1
        self.interaction_matrix = pd.concat([self.interaction_matrix, new_row])
        
        new_user_factors = self.svd.transform(new_row)
        self.user_factors = np.vstack([self.user_factors, new_user_factors])

    def add_event(self, new_event: Dict[str, Any]) -> None:
        self.events_data.append(new_event)

        new_event_vector = self.embedder.embed([new_event['name']])
        self.event_vectors = np.vstack([self.event_vectors, new_event_vector])

        self.index.addDataPoint(len(self.event_vectors) - 1, new_event_vector[0])
        self.index.createIndex({'post': 2}, print_progress=True)
        
        self.interaction_matrix[new_event['event_id']] = 0

        self.svd = TruncatedSVD(n_components=self.n_components)
        self.user_factors = self.svd.fit_transform(self.interaction_matrix)
        self.event_factors = self.svd.components_.T
        
    def remove_user(self, user_id: str) -> None:
        self.users_data = [user for user in self.users_data if user['user_id'] != user_id]
        
        if user_id in self.interaction_matrix.index:
            self.interaction_matrix.drop(user_id, axis=0, inplace=True)

            self.svd = TruncatedSVD(n_components=self.n_components)
            self.user_factors = self.svd.fit_transform(self.interaction_matrix)
            self.event_factors = self.svd.components_.T
        else:
            raise ValueError(f'User with ID {user_id} does not exist.')
    
    def remove_event(self, event_id: str) -> None:
        self.events_data = [event for event in self.events_data if event['event_id'] != event_id]

        if event_id in self.interaction_matrix.columns:
            self.interaction_matrix.drop(event_id, axis=1, inplace=True)
            
            event_idx = self.event_ids.index(event_id)
            self.event_vectors = np.delete(self.event_vectors, event_idx, axis=0)
            self.index = nmslib.init(method='hnsw', space='cosinesimil')
            self.index.addDataPointBatch(self.event_vectors)
            self.index.createIndex({'post': 2}, print_progress=True)

            self.svd = TruncatedSVD(n_components=self.n_components)
            self.user_factors = self.svd.fit_transform(self.interaction_matrix)
            self.event_factors = self.svd.components_.T
        else:
            raise ValueError(f'Event with ID {event_id} does not exist.')