FROM node:alpine
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . /app
CMD [ "npm", "start" ]


# -------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]