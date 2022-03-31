FROM node:16-alpine as build

WORKDIR /usr/local/app

COPY . /usr/local/app

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/datagen /usr/share/nginx/html

# Expose port 80
EXPOSE 80
