
---

# Como rodar o projeto Rails + React

Este projeto é dividido em duas partes:

* **Backend:** Rails API
* **Frontend:** React

Para rodar tudo corretamente, siga os passos abaixo.

## 1. Clonando os repositórios

Clone os dois repositórios do projeto:

* **Backend (Rails):** [https://github.com/brunoschumacherf/backend-deputy](https://github.com/brunoschumacherf/backend-deputy)
* **Frontend (React):** [https://github.com/brunoschumacherf/front-end-deputy](https://github.com/brunoschumacherf/front-end-deputy)

## 2. Rodando o backend (Rails)

1. Acesse a pasta do backend:

   ```bash
   cd backend-deputy
   ```

2. Instale as dependências:

   ```bash
   bundle install
   ```

3. Configure o banco de dados:

   ```bash
   rails db:create db:migrate
   ```

4. Rode o servidor Rails (na porta 3000):

   ```bash
   rails s -p 3000
   ```

O backend estará rodando em: [http://localhost:3000](http://localhost:3000)

## 3. Rodando o frontend (React)

1. Acesse a pasta do frontend:

   ```bash
   cd front-end-deputy
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o servidor React (na porta 3001):

   ```bash
   npm start
   ```

O frontend estará rodando em: [http://localhost:3001](http://localhost:3001)

## 🚀 Pronto!

Agora o frontend estará se comunicando com a API Rails. Lembre-se de garantir que o backend 