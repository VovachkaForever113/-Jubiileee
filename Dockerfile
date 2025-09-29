FROM nginx:alpine

# Чистим стандартный html
RUN rm -rf /usr/share/nginx/html/*

# Копируем сайт
COPY jubileee/ /usr/share/nginx/html/

# Копируем наш конфиг в conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
