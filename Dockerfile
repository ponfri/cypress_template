FROM cypress/base:20.14.0

RUN mkdir /app
WORKDIR /app

COPY package.json /app

RUN npm install
#RUN node_modules/.bin/cypress install
#RUN npm install cypress --save-dev

RUN npx cypress verify

COPY . /app

#CMD [ "npm", "run", "cypress:run"]