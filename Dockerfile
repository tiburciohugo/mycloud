FROM node:18-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm install

COPY . ./

ENV PORT=8080

EXPOSE 8080
