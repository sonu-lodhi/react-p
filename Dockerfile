# Use Node to build React
FROM node:18 AS build
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]