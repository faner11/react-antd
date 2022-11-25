FROM nginxinc/nginx-unprivileged:alpine

LABEL maintainer="faner11"

WORKDIR /public

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /public/
