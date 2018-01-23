FROM node:carbon
WORKDIR /usr/src/NodeAPI
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]