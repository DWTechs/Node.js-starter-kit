FROM node:15.6.0-alpine3.12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci -no-progress --loglevel=error
# Bundle app source
# COPY . /usr/src/app
# EXPOSE 3000
CMD [ "npm", "start" ]

