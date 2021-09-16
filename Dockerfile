FROM node:latest
WORKDIR /usr/src
COPY . .
CMD ["node", "hola-mundo.js" ]
