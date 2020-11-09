FROM node:lts-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 4200

RUN npm run build