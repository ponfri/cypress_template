FROM cypress/base:20.14.0

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install cypress --save-dev

#RUN npx cypress verify <- NOT SUE WHY THIS FAILS. Cypress said to remove with no details as to why. 

#RUN [ "npm", "run", "cypress:run"] <- being executed from the docker-compose.yml file.