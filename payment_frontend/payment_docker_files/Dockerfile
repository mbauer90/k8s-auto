FROM nginx:alpine

#USER root
COPY ./dist/ /usr/share/nginx/html

WORKDIR /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]