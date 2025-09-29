FROM nginx:alpine

# Удаляем дефолтную страницу nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем только содержимое папки с сайтом
COPY jubileee/ /usr/share/nginx/html/

# Копируем наш конфиг nginx (если используешь свой)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
