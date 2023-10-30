# Criando API's com Angular

O desenvolvimento dessa API tem como objetivo fixar e aplicar os conhecimentos adquiridos no Programa Start by Capgemini 2023.
O back-end desse projeto é em `PHP` e o seu front-end em `Angular`

## Requisitos

- PHP
- MySQL
- NodeJS
- Angular
- XAMPP

Obs.: Neste projeto utilizei o aplicativo XAMPP para a disponibilização do ambiente e do MySQL.

## Banco de Dados

No `MySQL` crie um banco de dados chamado "api".

```
CREATE DATABASE api;
```
<p>Agora, crie uma tabela chamada "cursos" com os seguintes campos:</p>

```
CREATE TABLE cursos(
    idCursos INT AUTO-INCREMENT PRIMARY KEY,
    nomeCurso VARCHAR(30),
    valorCurso DECIMAL(10,2)
);
```


Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.6.
