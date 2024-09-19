# Moscow Green Code

*Green MISIS team*

Team Members:
1) **Сергей Цуканов** - Backend
2) **Дмитрий Коноплянников** - Frontend
3) **Анна Гулякина** - Design
4) **Ксения Никандрова** - Product Manager
5) **Кирилл Рыжичкин** - ML Engineer

Презентация: [тык](https://google.com)

Веб-сервис: [тык](https://green.itatmisis.ru/)

## Кейс "Экопросвет"

> Перед участниками экотона стоит задача разработать платформу для информирования горожан об экоактивностях города. Информационный ресурс будет способствовать объединению экологического сообщества, формированию единого поля достоверной и полезной информации об охране окружающей среды, а также позволит Департаменту природопользования и охраны окружающей среды города Москвы определять наиболее интересные темы экоповестки и предлагать новые форматы взаимодействия с жителями Москвы.

## Предложенное решение

- персонализированные рекомендации (на основе истории поиска, избранного и интересов пользователя + коллаборативная фильтрация)
  - быстрый векторный поиск HNSW
  - легковесный эмбеддер rubert-tiny2
  - SVD для коллаборативной фильтрации
- личный кабинет пользователя
  - события по записи
  - избранное
  - архив событий
  - друзья и события друзей
- система поощрения (бонусы за прогресс)
- удобная система поиска
  - поддерживаем нечеткий поиск
  - есть фильтрация по категориям
 
![scheme](scheme.png)

## Формат API
- /create_user
```
curl -X POST http://green.itatmisis.ru:8002/auth/create_user \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "password": "securePassword"
}'  // возвращает access_token
```

- /login
```
   curl -X POST http://green.itatmisis.ru:8002/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "user3@example.com",
    "password": "securePassword"
}' // возвращает access_token
```

- /save_user_info
```
   curl -X POST http://green.itatmisis.ru:8002/auth/save_user_info \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoxNzI2Njc3ODE4LCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.2-NW5ufBBUzA77Sm7jFaUmn0epjmBLTi2fbleIUxiu0" \
-d '{"email": "user@example.com", "password": "securePassword", "name":"Sergei", "surname":"Tsukanov", "birthdate":"23.05.2006", "phone":"79002000000", "gender":"m", "send_notifications":true}'
```

- /save_interests
```
  curl -X POST  http://green.itatmisis.ru:8002/personalise/save_interests \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoxNzI2NjkyNzQxLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIn0.qAbJA2s01uhJIgtgNaH0QwEJHPUZjapEAhwZD2JpcGU" \
     -H "Content-Type: application/json" \
     -d "{"interests":["vistavki", "subbotniki"]}" \
```
    
- /add_event
```
curl -X POST   http://green.itatmisis.ru:8002/event/add_event \
  -H "Content-Type: application/json" \
  -d '{
    "id": "your_event_id",
    "title": "Your Event Title",
    "date": "2024-02-28",
    "address": "Your Event Address",
    "organization": "Your Organization",
    "comment": [
      {
        "user_id": "user123",
        "name": "John",
        "surname": "Doe",
        "email": "john.doe@example.com",
        "content": "Comment 1"
      },
      {
        "user_id": "user456",
        "name": "Jane",
        "surname": "Doe",
        "email": "jane.doe@example.com",
        "content": "Comment 2"
      }
    ],
    "image": "https://example.com/event_image.jpg",
    "tags": ["tag1", "tag2", "tag3"],
    "description": "Your Event Description",
    "isfavourite": false,
    "coordx": 12.345,
    "coordy": 56.789
  }' \
```

- /get_events (в зависимости от того, есть ли header "Authorization", будет пресонализированная, либо не персонализированная лента мероприятий; "amount" - сколько мероприйтий надо вернуть)
```
curl -X GET http://green.itatmisis.ru:8002/event/get_events/{amount} \
  -H "Authorization: Bearer <your_token>" \

    возвращает список Event[]
```

- /get_event/{event_id} (получение всей информации об event по id)
```
curl -X GET http://green.itatmisis.ru:8002/event/get_event/{event_id}

 возвращает Event:

Event{
  "Title": "string",
  "Date": "string",
  "Address": "string",
  "Organization": "string",
  "Image": "string",
  "Tags": "[]string",
  "Description": "string",
  "CoordX": "float32",
  "CoordY": "float32"
}
```
