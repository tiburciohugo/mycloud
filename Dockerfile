FROM node:18-alpine

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm install

COPY src/ src/

ENV PORT=8080

EXPOSE 8080
