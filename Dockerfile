FROM nginx:1.13.12-alpine as production-stage
COPY / /usr/share/nginx/front-deployment
VOLUME ["/usr/share/nginx/front-deployment"]
CMD ["nginx", "-g", "daemon off;"]
