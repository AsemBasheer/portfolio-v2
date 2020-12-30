FROM node:14.15.0-alpine

ENV NODE_ENV=production

WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm install --production

COPY . ./

EXPOSE 3000
