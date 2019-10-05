FROM mhart/alpine-node:6.2.0
#FROM node:alpine
# FROM node:6

RUN npm install -g nodemon forever

# create src directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY package.json /src
#RUN npm install

# Bundle src source
COPY . /src

# To bind server port
EXPOSE 8065

CMD cd /src && node scripts/web-server.js
#CMD cd /src
#CMD [ "npm", "serve" ]

# You can then build and run the Docker image:
# $ docker build -t my-nodejs-app .
# $ docker run -it --rm --name my-running-app my-nodejs-app
