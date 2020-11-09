FROM nginx:1.13.12-alpine as production-stage
COPY / /usr/share/nginx/html
VOLUME ["/usr/share/nginx/html"]
CMD ["nginx", "-g", "daemon off;"]
