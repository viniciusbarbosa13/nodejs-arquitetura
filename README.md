<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Descrição

Exemplo prático de uma api desenvolvida em NodeJs com NestJs

## Instalação

```Instale as dependencias
$ npm install

Instale o banco de dados postgres

defina DB_USER = postgres
defina DB_PASSWORD = postgres
defina DB_HOST = postgres
defina DB_PORT = 5432

Criar um novo banco de dados chamado
$ api-certificados

Execute as migrations com o comando 
$ yarn typeorm migration:run
```

## Rodando a Aplicação

```bash
$ npm start

```

## Testando a aplicação

```bash
$ npm run test
```

## Abrir o Swagger


<a href="http://localhost:3002/api/" target="_tab" >
Abrir o Swagger
</a>
