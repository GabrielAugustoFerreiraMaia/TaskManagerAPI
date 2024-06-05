# Aplicação Node.js Gerenciadora de Tarefas

## Descrição

Este é um exemplo simples de uma aplicação Node.js para gerenciamento de tarefas utilizando um banco de dados MongoDB.

## Pré-requisitos

- Node.js instalado (versão 12.x ou superior)
- MongoDB instalado e em execução

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/aplicacao-node-tarefas.git
2. Acesse o diretório da aplicação:

   ```bash
   cd aplicacao-node-tarefas
3. Instale as dependências do projeto:
   ```bash
   npm install
## Configuração do Banco de Dados

1. Certifique-se de que o MongoDB está instalado e em execução na porta padrão (27017).
2. A aplicação utilizará um banco de dados chamado `tasksdb`. Se necessário, ajuste a conexão com o banco de dados no arquivo `db.js`.

## Execução da Aplicação

Para iniciar a aplicação, execute o seguinte comando:
```bash
npm install
```
Isso iniciará o servidor na porta 3000. Acesse http://localhost:3000 no seu navegador para usar a aplicação.

## Endpoints da API
A API possui os seguintes endpoints:

- `GET /api/tasks`: Retorna todas as tarefas cadastradas.
- `GET /api/tasks/:id`: Retorna uma tarefa específica pelo ID.
- `POST /api/tasks`: Cria uma nova tarefa.
- `PUT /api/tasks/:id`: Atualiza uma tarefa existente pelo ID.
- `DELETE /api/tasks/:id`: Exclui uma tarefa pelo ID.

Consulte a documentação da API para obter detalhes sobre como usar cada endpoint.

## Documentação da API

A documentação da API está disponível em [http://localhost:3000/api-docs](http://localhost:3000/api-docs), utilizando a ferramenta Swagger UI para interação e teste dos endpoints.


## Contribuição
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta enviar um pull request para revisão.

Autor
[Gabriel Augusto](https://github.com/GabrielAugustoFerreiraMaia)