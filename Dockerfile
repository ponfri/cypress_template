FROM cypress/base:20.14.0

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN node_modules/.bin/cypress install
#RUN npm install cypress --save-dev

RUN npx cypress verify

#CMD [ "npm", "run", "cypress:run"] <- being executed from the docker-compose.yml file. Chnaged to CMD instead of RUN so that it runs after the image is done.