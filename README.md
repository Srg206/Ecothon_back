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

Swagger API docs: [тык](https://google.com)

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
 
## Блок-схема решения

тут схема нашего решения (пользовательский путь)

## Формат API
Swagger не успел прикрутить 
1) curl -X POST http://green.itatmisis.ru:8002/auth/create_user \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "password": "securePassword"
}'  // возвращает access_token

2) curl -X POST http://green.itatmisis.ru:8002/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "user3@example.com",
    "password": "securePassword"
}' // возвращает access_token

3)  curl -X POST http://green.itatmisis.ru:8002/auth/save_user_info \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoxNzI2Njc3ODE4LCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.2-NW5ufBBUzA77Sm7jFaUmn0epjmBLTi2fbleIUxiu0" \
-d '{"email": "user@example.com", "password": "securePassword", "name":"Sergei", "surname":"Tsukanov", "birthdate":"23.05.2006", "phone":"79002000000", "gender":"m", "send_notifications":true}'

4)  curl -X POST  http://green.itatmisis.ru:8002/personalise/save_interests \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoxNzI2NjkyNzQxLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIn0.qAbJA2s01uhJIgtgNaH0QwEJHPUZjapEAhwZD2JpcGU" \
     -H "Content-Type: application/json" \
     -d "{"interests":["vistavki", "subbotniki"]}" \
    


тут описание ручек
