

# Documentação do MyTodo-APP


Esta documentação fornece um passo a passo para replicar o processo de configuração e execução do sistema em sua máquina ou servidor. O MyTodo-APP é um aplicativo de gerenciamento de tarefas que permite adicionar, consultar, marcar como feito, desfazer e excluir tarefas.

O MyTodo-APP é dividido em backend e frontend. O backend utiliza as seguintes tecnologias: nodemon, body-parser, express, mongoose, node-restful, pm2 e mongodb para o banco de dados. O frontend utiliza as seguintes tecnologias: axios, babel-core, babel-loader, babel-plugin-react-html-attrs, babel-plugin-transform-object-rest-spread, babel-preset-es2015, babel-preset-react, bootstrap, css-loader, extract-text-webpack-plugin, file-loader, font-awesome, react, react-dom, react-redux, react-router, redux-multi, redux-thunk, redux-promise, style-loader, webpack e webpack-dev-server.

## Pré-requisitos

Antes de começar, verifique se o seu ambiente possui os seguintes pré-requisitos:

- Node.js (versão >= 10.0.0)
- MongoDB (versão >= 3.6.0)

## Passo 1: Configuração do Backend

1. Clone o repositório do MYTODO-APP para o seu ambiente local.

2. Acesse o diretório do backend:
   ```
   cd MYTODO-APP/backend
   ```

3. Instale as dependências do backend:
   ```
   npm install
   ```

4. Inicie o servidor backend em modo de desenvolvimento (utilizando nodemon):
   ```
   npm run dev
   ```

   Ou, inicie o servidor backend em modo de produção (utilizando pm2):
   ```
   npm run production
   ```

   O backend estará sendo executado em http://localhost:3004.

## Passo 2: Configuração do Frontend

1. Acesse o diretório do frontend:
   ```
   cd MYTODO-APP/frontend
   ```

2. Instale as dependências do frontend:
   ```
   npm install
   ```

3. Inicie o servidor frontend em modo de desenvolvimento (utilizando webpack-dev-server):
   ```
   npm run dev
   ```

   Ou, gere os arquivos estáticos do frontend para produção (utilizando webpack):
   ```
   npm run build
   ```

   Em seguida, sirva os arquivos estáticos utilizando um servidor HTTP de sua escolha.

   O frontend estará sendo executado em http://localhost:8080 (no modo de desenvolvimento) ou estará disponível nos arquivos gerados na pasta `dist` (no modo de produção).

## Parabéns!

Agora você tem o MyTodo-APP configurado e em execução em sua máquina ou servidor. Acesse o aplicativo no navegador e comece a gerenciar suas tarefas. O aplicativo oferece os seguintes recursos:

- Adicionar tarefas
- Consultar tarefas
- Marcar tarefas como concluídas
- Desfazer tarefas concluídas
- Excluir tarefas

Além disso, você pode usar os seguintes atalhos de teclado:

- `Enter`: Adiciona uma nova tarefa
- `Esc`: Limpa o formulário de adição de tarefas
- `Shift + Enter`: Pesquisa uma tarefa existente

Divirta-se usando o  MyTodo-APP!
