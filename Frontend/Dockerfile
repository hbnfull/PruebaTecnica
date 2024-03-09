# build environment
FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY . /app

RUN npm install


RUN npm run build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY .htpasswd /etc/nginx/.htpasswd

COPY --from=build-step /app/dist/PruebaTecnica /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORTR' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"