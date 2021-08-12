<h1>Simples projeto em NodeJs, React e React Native</h1>

Aplicação simples em NodeJs com React e React Nastive!

TODO: formatar esse doc melhor

<h2>API NODEJS</h2>
<h3>Instalar todas as dependências indicada pelo package.json</h3>
`npm i`
###  Criar o arquivo package
Para criar projeto/create a package.json file
CLI: https://docs.npmjs.com/cli/v6/commands/npm-init

`npm init`

<h2>Gerencia as requisições, rotas e URLs, ebntre outras funcionalidades</h2>
Package: https://www.npmjs.com/package/express

`npm i express`

<h2>Para rodar o Projeto ( Sem o nodemon )</h2>

`node app.js`

<h2>Para acessar o projeto no navegador (Informe a porta do seu projeto Ex: 8080)</h2>
http://localhost:8080

<h2>Para rodar projeto sem necessidade de fechar e abrir o terminal após alteração.</h2>
</h3>Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte.</h3>
Package: https://www.npmjs.com/package/nodemon

`npm i -g nodemon`

<h2>Para rodar o projeto. Substitui o "node app.js".</h2>
```
nodemon app.js 
ou 
npm start
```

<h2>Se retornar erro, adiciona o caminho nas variáveis de ambiente.</h2>

```
npm i -g nodemon
npm i --save-dev nodemon
npm config get prefix
set PATH=%PATH%;C:\Users\"Aqui seu usuario"\AppData\Roaming\npm;
```

<h2>Json Web Token (JWT) - Padrao que define como transmitir e armazenasr dados 
ou objetos JSON de forma compacta e segura entre diferentes aplicacoes.</h2>

<p>Os dados contidos podem ser validados a qualquer momento pois o token é assinado digitalmente.</p>

<ul>
   <li>Para verificar a assinatura: https://jwt.io</li>
   <li>Package: https://www.npmjs.com/package/jsonwebtoken</li>
</ul>

`npm i --save jsonwebtoken`

<h2>Gerar chaves</h2>
https://generate.plus/

<h2>Gerencia variáveis de ambiente (.env)</h2>
Crie um arquivo .env na raiz do projeto "/api" com as variaveis abaixo.

<ul>
    <li>SECRETE_KEY = 'crieSuaChaveAleatoria01010101'</li>
    <li>URL_REQUEST = 'http://localhost:8080/''</li>
    <li>DB_HOST = '127.0.0.1'</li>
    <li>DB_USER = 'root'</li>
    <li>DB_PASSWORD = 'userPass'</li>
    <li>DB_DATABASE = 'imersaoNodejs'
    <li>DB_PORT = 3306'</li>
</ul>

<p><b>Package:</b> https://www.npmjs.com/package/dotenv</p>

`npm i --save dotenv`

<h2>Permitir acesso a API</h2>
https://www.npmjs.com/package/cors

`npm i --save cors`

<h2>Banco de dados  - Mysql 8</h2>
<p>Você pode instalar o Mysql ou via Docker, que foi o meu caso.<br />
Download do Docker Compose para Windows e Mac<br />
https://docs.docker.com/compose/install/<br />
Irá construir as images caso precise e rodar os containers<br />
./api/docker-compose.yaml</p>

`docker-compose up -d`

<h2>Instalar o Mysql no projeto</h2>
<p>https://www.npmjs.com/package/mysql2</p>

`npm i --save mysql2`

<h2>Sequelize é uma biblioteca que auxilia o gerenciamento de banco de dados SQL.</h2>
<p>https://sequelize.org/</p>

`npm i --save sequelize`

<h2>ódulo para criptografar dados</h2>
<p>https://preview.npmjs.com/package/bcryptjs/v/1.0.1</p>

`npm i --save bcryptjs`

<h2>APP REACT</h2>
<p>Agora vamos criar uma tela de login para se comunicar com a nossa API.<br />
O comando abaixo irá criar a estrutura padrão para iniciarmos.<br />
Obs: Rode o comando fora da pasta/projeto API.<br />
Teremos dois diretórios: API e APP.</p>

`npx create-react-app app`

<p>Rode o comando NPM start para abrir o projeto no browser "http://localhost:3000/". <br />
Se tudo der certo, irá abrir com o logotipo do React. </p>

<h2>Deploy</h2>
<p>Iremos utilizar duas plataformas grátis para hospedar nossas aplicações.
O obejtivo de separa é só para demonstrar a prática em separar os serviços.
Mas poderia deixar tudo na plataforma do Heroku, por exemplo.</p>
<h2>Vercel</h2>
Para publicar o app React.
https://vercel.com/
<h2>Heroku</h2>
Para hospedar a API NodeJs com banco Mysql. <br />
https://id.heroku.com

