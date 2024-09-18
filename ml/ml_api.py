from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel
from recsys import RecSys
from fuzzy import FuzzySearch


app = FastAPI()

recsys_instance = None
fuzzy_search_instance = None


class UserModel(BaseModel):
    user_id: str
    favorites: List[str]
    search_history: List[str]
    interests: List[str]


class EventModel(BaseModel):
    event_id: str
    name: str
    category: str


class RecSysData(BaseModel):
    users_data: List[UserModel]
    events_data: List[EventModel]
    
    
class FuzzySearchQuery(BaseModel):
    query: str
    limit: int


@app.post('/create_recsys')
def create_recsys(recsys_data: RecSysData):
    global recsys_instance
    if recsys_instance:
        return {'message': 'RecSys instance already exists.'}
    
    users_data = [user.model_dump() for user in recsys_data.users_data]
    events_data = [event.model_dump() for event in recsys_data.events_data]
    
    recsys_instance = RecSys(users_data, events_data)
    return {'message': 'RecSys instance created successfully.'}


@app.post('/create_fuzzysearch')
def create_fuzzysearch(events: List[EventModel]):
    global fuzzy_search_instance
    if fuzzy_search_instance:
        return {'message': 'FuzzySearch instance already exists.'}
    
    events_data = [event.model_dump() for event in events]
    fuzzy_search_instance = FuzzySearch(events=events_data)
    return {'message': 'FuzzySearch instance created successfully.'}


@app.post('/add_user')
def add_user(new_user: UserModel):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    recsys_instance.add_user(new_user.model_dump())
    return {'message': 'User added successfully.'}


@app.post('/add_event')
def add_event(new_event: EventModel):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    recsys_instance.add_event(new_event.model_dump())
    return {'message': 'Event added successfully.'}


@app.put('/update_user')
def update_user(updated_user: UserModel):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    try:
        recsys_instance.update_user(updated_user.model_dump())
        return {'message': 'User updated successfully.'}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))


@app.delete('/remove_user/{user_id}')
def remove_user(user_id: str):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    try:
        recsys_instance.remove_user(user_id)
        return {'message': f'User with ID {user_id} removed successfully.'}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))


@app.delete('/remove_event/{event_id}')
def remove_event(event_id: str):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    try:
        recsys_instance.remove_event(event_id)
        return {'message': f'Event with ID {event_id} removed successfully.'}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    

@app.get('/hybrid_recommendation/{user_id}')
def hybrid_recommendation(user_id: str, top_n: int = 5):
    global recsys_instance
    if not recsys_instance:
        raise HTTPException(status_code=400, detail='RecSys instance is not initialized.')
    
    try:
        recommended_events = recsys_instance.hybrid_recommendation(user_id, top_n)
        return {'recommended_events': recommended_events}
    except StopIteration:
        raise HTTPException(status_code=404, detail='User not found.')
    
    
@app.post('/fuzzy_add_event')
def fuzzy_add_event(event: EventModel):
    global fuzzy_search_instance
    if not fuzzy_search_instance:
        raise HTTPException(status_code=400, detail='FuzzySearch instance is not initialized.')
    
    fuzzy_search_instance.add_event(event.name)
    return {'message': f'Event "{event.name}" added to FuzzySearch.'}


@app.post('/fuzzy_search')
def fuzzy_search(query_data: FuzzySearchQuery):
    global fuzzy_search_instance
    if not fuzzy_search_instance:
        raise HTTPException(status_code=400, detail='FuzzySearch instance is not initialized.')
    
    results = fuzzy_search_instance.search(query_data.query, limit=query_data.limit)
    return {'results': results}