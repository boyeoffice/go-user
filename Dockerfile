FROM node:gallium

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./
RUN npm install --force

# USER node

COPY . .

EXPOSE 3000

# Build app
RUN npm run build

# Start app
CMD ["npm","start"]
