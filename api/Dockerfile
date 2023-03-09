FROM node:lts-alpine3.15

WORKDIR /app
COPY package.json .

RUN npm install
RUN npm install typescript -g
RUN npm install tsconfig-paths

COPY . .

RUN tsc
CMD ["npm", "start"]

EXPOSE 5000
