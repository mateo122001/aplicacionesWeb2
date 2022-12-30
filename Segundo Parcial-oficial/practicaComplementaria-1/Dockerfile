FROM node:18
RUN mkdir -p /usr/src/apl
WORKDIR /usr/src/apl
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2000
CMD ["npm", "run", "start"]
