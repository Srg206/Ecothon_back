from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel
from recsys import RecSys

app = FastAPI()

recsys_instance = None

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


@app.post('/create_recsys')
def create_recsys(recsys_data: RecSysData):
    global recsys_instance
    if recsys_instance:
        return {'message': 'RecSys instance already exists.'}
    
    users_data = [user.model_dump() for user in recsys_data.users_data]
    events_data = [event.model_dump() for event in recsys_data.events_data]
    
    recsys_instance = RecSys(users_data, events_data)
    return {'message': 'RecSys instance created successfully.'}


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