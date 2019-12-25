FROM node:13.2.0
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start
