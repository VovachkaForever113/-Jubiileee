# Используем образ Nginx
FROM nginx:alpine

# Чистим стандартный html
RUN rm -rf /usr/share/nginx/html/*

# Копируем папку с сайтом (правильное имя!)
COPY jubileee/ /usr/share/nginx/html/

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/nginx.conf
