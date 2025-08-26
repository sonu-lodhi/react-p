# # --- Build stage ---
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# # Use CI-friendly, reproducible install
# RUN npm ci
# COPY . .
# # Adjust if your build script is different
# RUN npm run build

# # --- Runtime stage (serve static build via Nginx) ---
# FROM nginx:1.25-alpine
# # Optional: tune Nginx or add gzip etc. in nginx.conf
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]


# # Stage 1: Build React App
# FROM node:18-alpine as build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# -------- Stage 1: Build React app ----------
FROM node:18-alpine AS build
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . /app 
# RUN npm run build
CMD [ "npm", "start" ]

# -------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine
# optional: remove default nginx page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]