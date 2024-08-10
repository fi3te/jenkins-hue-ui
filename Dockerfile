FROM node:18.20-alpine AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./package.json
RUN yarn
COPY . .
RUN npm install -g @angular/cli
RUN yarn build

FROM nginx:1.27-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
