FROM nginxinc/nginx-unprivileged:alpine

EXPOSE 8080
LABEL maintainer="faner11"

WORKDIR /public

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /public/
