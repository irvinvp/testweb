FROM node:14-slim
WORKDIR /usr/src/app
COPY . .
CMD [ "node", "test.js" ]
