
## :information_source:  Como usar

Para utilizar a aplicação, é preciso ter instalado no seu computador o [Node.js](http://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/).
Criar uma database Postgres localmente do nome reportsproject.

### Instalar Server (Node.JS) 

```bash
# Clonar repositório
$ git clone https://github.com/aloisiomartinez/newsProject.git

# Acessar a pasta
$ cd newsProject/api

# Instalar dependências
$ yarn install

# Rodar as Migrations
$ yarn typeorm migration:run

# Começar a aplicação
$ yarn dev
```

### Instalar Web (ReactJS)

```bash
# Clonar repositório
$ git clone https://github.com/aloisiomartinez/newsProject.git

# Acessar a pasta
$ cd newsProject/front

# Instalar dependências
$ yarn install

# Começar a Aplicação
$ yarn start
```
