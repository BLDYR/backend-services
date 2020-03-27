FROM node:12
WORKDIR /usr/src/pc-builds/
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]
