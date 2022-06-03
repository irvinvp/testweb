FROM node
WORKDIR /usr/src/app
COPY . .
CMD [ "node", "test.js" ]
