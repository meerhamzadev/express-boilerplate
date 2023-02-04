FROM node:16-alpine
WORKDIR /app

COPY package.json .

RUN npm install -g npm &&\
  npm install

COPY . .

EXPOSE 3000