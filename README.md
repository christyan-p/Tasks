# Tasks

### Iniciar o Back End 

Antes de iniciar, certifique-se de que você tenha o Maven instalado.

```bash
# Insira as configurações do seu banco MySQL
$ nano tasks_backend/src/main/resources/application.properties

# Acesse a pasta do projeto no terminal/cmd
$ cd tasks_backend
$ mvn spring-boot:run

# O servidor inciará na porta:8080
```

### Iniciar o Front End 

Antes de iniciar, certifique-se de que você tenha o Node.js instalado.

```bash
# Instale as dependências
$ cd tasks_frontend
$ npm install 
ou
$ yarn add

# Configure a conexão com a API
# Dentro da pasta tasks_frontend:
$ nano src/api/api.js

# Rode o ambiente:
$ npm start
ou
$ yarn start

# O servidor inciará na porta:3000
```