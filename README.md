## Simples projeto em NodeJs, React e React Native

Aplicação simples em NodeJs com React e React Nastive!

TODO: formatar esse doc melhor

Instalar todas as dependências indicada pelo package.json
### npm i

Criar o arquivo package
Para criar projeto/create a package.json file
CLI: https://docs.npmjs.com/cli/v6/commands/npm-init
### npm init

Gerencia as requisições, rotas e URLs, ebntre outras funcionalidades
Package: https://www.npmjs.com/package/express
### npm i express

Para rodar o Projeto ( Sem o nodemon )
### node app.js

Para acessar o projeto no navegador (Informe a porta do seu projeto Ex: 8080)
### http://localhost:8080

Para rodar projeto sem necessidade de fechar e abrir o terminal após alteração.
Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte.
Package: https://www.npmjs.com/package/nodemon
### npm i -g nodemon

Para rodar o projeto. Substitui o "node app.js".
### nodemon app.js ou ### npm start

Se retornar erro, adiciona o caminho nas variáveis de ambiente.
### npm i -g nodemon
### npm i --save-dev nodemon
### npm config get prefix
### set PATH=%PATH%;C:\Users\"Aqui seu usuario"\AppData\Roaming\npm;

Json Web Token (JWT) - Padrao que define como transmitir e armazenasr dados ou 
objetos JSON de forma compacta e segura entre diferentes aplicacoes.
Os dados contitos podemo ser validados a qualquer momento pois o token é assinado digitalmente.
>> https://jwt.io
Package: https://www.npmjs.com/package/jsonwebtoken
### npm i --save jsonwebtoken

Gerar chaves
https://generate.plus/

Gerencia variáveis de ambiente (.env)
Package: https://www.npmjs.com/package/dotenv
### npm i --save dotenv

Permitir acesso a API
https://www.npmjs.com/package/cors
### npm i --save cors

Banco de dados  - Mysql 8
Você pode instalar o Mysql ou via Docker, que foi o meu caso.
Download do Docker Compose para Windows e Mac
https://docs.docker.com/compose/install/
Irá construir as images caso precise e rodar os containers
./api/docker-compose.yaml
### docker-compose up -d

Instalar o Mysql no projeto
https://www.npmjs.com/package/mysql2
### npm i --save mysql2

Sequelize é uma biblioteca que auxilia o gerenciamento de banco de dados SQL.
https://sequelize.org/
### npm i --save sequelize

Módulo para criptografar dados
https://preview.npmjs.com/package/bcryptjs/v/1.0.1
### npm i --save bcryptjs
