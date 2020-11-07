FROM node:latest as build-stage
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /front-deployment
COPY --from=build-stage /dist /front-deployment
COPY nginx.conf /etc/nginx/nginx.conf