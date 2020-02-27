FROM node:12
WORKDIR /usr/src/pc-builds-container
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
