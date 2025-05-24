FROM node:22

WORKDIR /home/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]