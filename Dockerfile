# Используем образ Nginx
FROM nginx:alpine

# Чистим стандартный html
RUN rm -rf /usr/share/nginx/html/*

# Копируем содержимое папки с сайтом (имя папки точно совпадает!)
COPY jubileee/ /usr/share/nginx/html/

# Копируем конфиг
COPY nginx.conf /etc/nginx/nginx.conf
