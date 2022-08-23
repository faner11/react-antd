FROM harbor.indexed.cn/library/nginx:alpine

LABEL maintainer="yizong"

WORKDIR /public

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /public/
