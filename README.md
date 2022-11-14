# CarControl-NodeJS

Aplicativo mobile feito para cadastrar e gerenciar carros, utilizando autenticação, conexão com o MongoDB.

## Importante

- Necessário todas as dependencias do projeto

### Requisitos

- NodeJS

### Iniciando

```
$ git clone https://github.com/lucasmoraessouza/verzel-teste-nodejs.git
```

```
$ cd verzel-teste-nodejss
```

```
$ npm install
```

```
$ npm run dev
```

### Rotas

- http://localhost:3333/login [POST](Fazer login no sistema com usuario e senha.)

- http://localhost:3333/cars [GET](Busca todos os carros cadastrados no sistema.)

- http://localhost:3333/car/:id [GET](Busca unico carro com ID.)

- http://localhost:3333/car [POST](Cria um carro com os campos Modelo, Marca, Ano e Valor.)

- http://localhost:3333/car/:id [PUT](Atualizar unico carro com ID)

- http://localhost:3333/car/:id [delete](Deletar unico com ID)

- http://localhost:3333/upload/:id [PUT](Cadastrar imagem do carro atraves do ID)

- http://localhost:3333/files [USE](Acessar imagem do carro cadastrado com ID)

## Autores

**Lucas de Moraes Souza**

## Licença

- Nenhuma

## Agradecimentos

- Verzel
