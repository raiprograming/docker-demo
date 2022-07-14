FROM node:16.0-alpine

WORKDIR .

ADD package*.json ./

RUN npm install

ADD index.js ./

CMD ["node","index.js"]