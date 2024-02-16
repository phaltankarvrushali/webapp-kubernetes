FROM node:13.12.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN ls

COPY . ./

EXPOSE 3002

CMD ["node", "app.js"]
