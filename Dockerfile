FROM node:latest
RUN mkdir -p /src/reviews-proxy
WORKDIR /src/reviews-proxy
COPY . /src/reviews-proxy
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "run", "start" ]