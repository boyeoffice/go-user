FROM node:gallium

WORKDIR /usr/app

COPY package*.json ./

USER node

EXPOSE 3000

RUN ["npm","run","build"]
