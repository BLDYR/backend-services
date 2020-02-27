FROM node:12
WORKDIR /usr/src/api-gateway-container
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
