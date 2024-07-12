# syntax=docker/dockerfile:1

FROM cypress/base:20.14.0

RUN mkdir /app
WORKDIR /app

COPY package.json /app

RUN npm install
RUN npx cypress verify

COPY . /app

ENTRYPOINT [ "npm" ]

#CMD ["run", "cypress:run"]