<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://logodownload.org/wp-content/uploads/2016/11/descomplica-logo.png" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Descrição

API do projeto B2B da Descomplica

## Instalação


Instalar a ultima versao do NodeJs

# <a target="_blank" href="https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi">Clique aqui para instalar</a>

Instalando as dependencias
```
$ npm install
```
## Instalando o Banco de Dados

<a target="_blank" href="https://www.postgresql.org/download/">
Instale o banco de dados PostgreSql
</a>

## Configurando o Banco de Dados

defina DB_USER
```
postgres
```
defina DB_PASSWORD
```
postgres
```
defina DB_HOST 
```
postgres
```
defina DB_PORT 
```
5432
```

Criar um novo banco de dados chamado
```
api-certificados
```

## Executando as Migrações
```
$ yarn typeorm migration:run
```
## Rodando a Aplicação
```
$ npm start
```

## Testando a aplicação
```
$ npm run test
```

## Abrir o Swagger
<a target="_blank" href="http://localhost:3002/api/">
Abrir o Swagger
</a>
