<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Exemplo prático de uma api desenvolvida em NodeJs com NestJs

## Installation

```bash
$ npm install
install postgres db
define DB_USER = postgres
define DB_PASSWORD = postgres
define DB_HOST = postgres
define DB_PORT = 5432
create new database named = api-certificados
finally execute migrations 
$ yarn typeorm migration:run
```

## Running the app

```bash
# development
$ npm start

```

## Test

```bash
# unit tests
$ npm run test
```

## Open Swagger api

```bash
# Swagger URL
http://localhost:3002/api/
```

