from typing import List, Dict
from rapidfuzz import process, fuzz

class FuzzySearch:
    def __init__(self, events: List[Dict[str, str]]):
        self.events = [event['name'] for event in events]
    
    def add_event(self, event_name: str) -> None:
        self.events.append(event_name)
    
    def search(self, query: str, limit: int = 100) -> List[str]:
        results = process.extract(query, self.events, scorer=fuzz.partial_ratio, limit=limit)
        return [result[0] for result in results]