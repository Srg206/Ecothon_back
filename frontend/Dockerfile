FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем приложение
RUN npm run build



FROM nginx:alpine

# Копируем собранное приложение из предыдущего шага
COPY --from=builder /app/build /usr/share/nginx/html




RUN rm /etc/nginx/conf.d/default.conf

COPY site /usr/share/nginx/html
COPY .nginx/nginx.conf /etc/nginx/nginx.conf
COPY .nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf


COPY ./fullchain.pem /etc/letsencrypt/live/green.itatmisis.ru/fullchain.pem
COPY ./privkey.pem /etc/letsencrypt/live/green.itatmisis.ru/privkey.pem


EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

