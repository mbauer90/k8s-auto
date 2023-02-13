FROM node:19-slim

USER root

RUN npm install -g @angular/cli@15.0.4

USER node

WORKDIR /home/node/app
COPY . /home/node/app

CMD ["tail", "-f", "/dev/null"]
#CMD ["sh", "-c", "npm install && npm run start"]
