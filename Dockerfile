FROM node:22.7.0-alpine3.20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4000
CMD ["npm","run","dev"]
