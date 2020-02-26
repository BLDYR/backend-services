FROM node:12
WORKDIR /usr/src/pc-builds-service
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
