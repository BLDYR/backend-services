FROM node:12
WORKDIR /usr/src/api-gateway/
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]
