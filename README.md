<h1>Projeto em NodeJs, React e React Native</h1>
<p>Aplicação simples utilizada para fins de estudos. <br />
Abaixo a sequência utilizada para o projeto.</p>
<h2>API - NodeJs</h2>
<p>
	Clone o projeto e instale todas as dependências indicadas pelo "./package.json"
</p>

![Estrutura geral](https://github.com/givisiez/imersao8/blob/main/images/estrutura-geral.png?raw=true)

![Estrutura da API](https://github.com/givisiez/imersao8/blob/main/images/estrutura-api.png?raw=true)


`$ npm i`
<h4>Criar o arquivo package</h4>
<p>
Para criar projeto/create a package.json file
CLI: https://docs.npmjs.com/cli/v6/commands/npm-init
</p> 

`$ npm init`  
<h2>Gerencia as requisições, rotas e URLs, ebntre outras funcionalidades</h2>
Package: https://www.npmjs.com/package/express 

`$ npm i express`
<h2>Para rodar o Projeto ( Sem o nodemon )</h2> 

`$ node app.js`  
<h2>Para acessar o projeto no navegador</h2>
<p>http://localhost:8080</p>
<h2>Para rodar projeto sem necessidade de fechar e abrir o terminal após alteração.</h2>
<p>
	Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte.
	Package: https://www.npmjs.com/package/nodemon
</p>  

`$ npm i -g nodemon`
<h2>Para rodar o projeto. </h2>
<p>Substitui o "node app.js".</p>

```
$ nodemon app.js
ou
$ npm start
```
<h2>Se retornar erro, adiciona o caminho nas variáveis de ambiente.</h2>

```
$ npm i -g nodemon
$ npm i --save-dev nodemon
$ npm config get prefix
$ set PATH=%PATH%;C:\Users\"Aqui seu usuario"\AppData\Roaming\npm;
```
<h2>Json Web Token (JWT)</h2>
<p>
	Padrão que define como transmitir e armazenar dados ou objetos JSON
	de forma compacta e segura entre diferentes aplicações.
</p>
<p>
	Os dados contidos podem ser validados a qualquer momento pois o token é assinado digitalmente.
</p>
<ul>
	<li>Para verificar a assinatura: https://jwt.io</li>
	<li>Package: https://www.npmjs.com/package/jsonwebtoken</li>
</ul> 

`$ npm i --save jsonwebtoken`
<h2>Gerar chaves</h2>
<p>Site gratuito para gerar chaves.</p>
<p>https://generate.plus/</p>
<h2>Gerencia variáveis de ambiente (.env)</h2>
<p>Crie um arquivo .env na raiz do projeto "/api" com as variaveis abaixo.</p>
<ul>
	<li>SECRETE_KEY = 'crieSuaChaveAleatoria01010101'</li>
	<li>URL_REQUEST = 'http://localhost:8080/''</li>
	<li>DB_HOST = '127.0.0.1'</li>
	<li>DB_USER = 'root'</li>
	<li>DB_PASSWORD = 'userPass'</li>
	<li>DB_DATABASE = 'imersaoNodejs'</li>
	<li>DB_PORT = 3306'</li>
</ul>
<p>
	<b>Package:</b> https://www.npmjs.com/package/dotenv
</p> 

`$ npm i --save dotenv`
<h2>Permitir acesso a API</h2>
https://www.npmjs.com/package/cors 

`$ npm i --save cors`
<h2>Banco de dados - Mysql 8</h2>
<p>
	Você pode instalar o MySql separadamente ou via Docker, que foi o meu caso.<br  />
	Realize o download do Docker Compose para Windows e Mac<br  />
	https://docs.docker.com/compose/install/<br  />
	Rode o comando abaixo, dentro do projeto, para construir as imagens  "./api/docker-compose.yaml"<br />
	<b> *Em breve detalho melhor o uso do Docker*</b>
</p>  

`$ docker-compose up -d`
<h2>Instalar o Mysql no projeto</h2>
<p>https://www.npmjs.com/package/mysql2</p>  

`$ npm i --save mysql2`
<h2>Sequelize</h2>
<p>
	Biblioteca que auxilia o gerenciamento de banco de dados SQL.<br  />
	https://sequelize.org/
</p>  

`$ npm i --save sequelize`
<h2>Módulo para criptografar dados</h2>
<p>https://preview.npmjs.com/package/bcryptjs/v/1.0.1</p> 

`$ npm i --save bcryptjs`
<h2>APP - React</h2>
<p>
	Agora vamos criar uma tela de login para se comunicar com a nossa API.<br  />
	O comando abaixo irá criar a estrutura padrão para iniciarmos.<br  />
	Obs: Rode o comando fora da pasta/projeto API.<br  />
	Teremos dois diretórios: API e APP.
</p> 

`$ npx create-react-app app`
<p>
	Rode o comando NPM start para abrir o projeto no browser "http://localhost:3000/". <br  />
	Se tudo der certo, irá abrir com o logotipo do React.
</p> 

![Estrutura inicial do APP](https://github.com/givisiez/imersao8/blob/main/images/estrutura-app.png?raw=true)

<h2>Deploy</h2>
<p>
	Iremos utilizar duas plataformas grátis para hospedar nossas aplicações.
	O obejtivo de separa é só para demonstrar a prática em separar os serviços.
	Mas poderia deixar tudo na plataforma do Heroku, por exemplo.
</p>
<h3>Vercel</h3>
<p>
Para publicar o app React. <br/>
https://vercel.com/
</p>
<h3>Heroku</h3>
<p>
	Para hospedar a API NodeJs com banco Mysql. <br  />
	https://id.heroku.com
</p>
<h2>Rotas</h2><h1>Projeto em NodeJs, React e React Native</h1>
<p>Aplicação simples utilizada para fins de estudos. <br />
Abaixo a sequência utilizada para o projeto.</p>
<h2>API - NodeJs</h2>
<p>
	Clone o projeto e instale todas as dependências indicadas pelo "./package.json"
</p>

![Estrutura geral](https://github.com/givisiez/imersao8/blob/main/images/estrutura-geral.png?raw=true)

![Estrutura da API](https://github.com/givisiez/imersao8/blob/main/images/estrutura-api.png?raw=true)


`$ npm i`
<h4>Criar o arquivo package</h4>
<p>
Para criar projeto/create a package.json file
CLI: https://docs.npmjs.com/cli/v6/commands/npm-init
</p> 

`$ npm init`  
<h2>Gerencia as requisições, rotas e URLs, ebntre outras funcionalidades</h2>
Package: https://www.npmjs.com/package/express 

`$ npm i express`
<h2>Para rodar o Projeto ( Sem o nodemon )</h2> 

`$ node app.js`  
<h2>Para acessar o projeto no navegador</h2>
<p>http://localhost:8080</p>
<h2>Para rodar projeto sem necessidade de fechar e abrir o terminal após alteração.</h2>
<p>
	Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte.
	Package: https://www.npmjs.com/package/nodemon
</p>  

`$ npm i -g nodemon`
<h2>Para rodar o projeto. </h2>
<p>Substitui o "node app.js".</p>

```
$ nodemon app.js
ou
$ npm start
```
<h2>Se retornar erro, adiciona o caminho nas variáveis de ambiente.</h2>


<h2>Json Web Token (JWT)</h2>
<p>
	Padrão que define como transmitir e armazenar dados ou objetos JSON
	de forma compacta e segura entre diferentes aplicações.
</p>
<p>
	Os dados contidos podem ser validados a qualquer momento pois o token é assinado digitalmente.
</p>
<ul>
	<li>Para verificar a assinatura: https://jwt.io</li>
	<li>Package: https://www.npmjs.com/package/jsonwebtoken</li>
</ul> 

`$ npm i --save jsonwebtoken`
<h2>Gerar chaves</h2>
<p>Site gratuito para gerar chaves.</p>
<p>https://generate.plus/</p>
<h2>Gerencia variáveis de ambiente (.env)</h2>
<p>Crie um arquivo .env na raiz do projeto "/api" com as variaveis abaixo.</p>
<ul>
	<li>SECRETE_KEY = 'crieSuaChaveAleatoria01010101'</li>
	<li>URL_REQUEST = 'http://localhost:8080/''</li>
	<li>DB_HOST = '127.0.0.1'</li>
	<li>DB_USER = 'root'</li>
	<li>DB_PASSWORD = 'userPass'</li>
	<li>DB_DATABASE = 'imersaoNodejs'</li>
	<li>DB_PORT = 3306'</li>
</ul>
<p>
	<b>Package:</b> https://www.npmjs.com/package/dotenv
</p> 

`$ npm i --save dotenv`
<h2>Permitir acesso a API</h2>
https://www.npmjs.com/package/cors 

`$ npm i --save cors`
<h2>Banco de dados - Mysql 8</h2>
<p>
	Você pode instalar o MySql separadamente ou via Docker, que foi o meu caso.<br  />
	Realize o download do Docker Compose para Windows e Mac<br  />
	https://docs.docker.com/compose/install/<br  />
	Rode o comando abaixo, dentro do projeto, para construir as imagens  "./api/docker-compose.yaml"<br />
	<b> *Em breve detalho melhor o uso do Docker*</b>
</p>  

`$ docker-compose up -d`
<h2>Instalar o Mysql no projeto</h2>
<p>https://www.npmjs.com/package/mysql2</p>  

`$ npm i --save mysql2`
<h2>Sequelize</h2>
<p>
	Biblioteca que auxilia o gerenciamento de banco de dados SQL.<br  />
	https://sequelize.org/
</p>  

`$ npm i --save sequelize`
<h2>Módulo para criptografar dados</h2>
<p>https://preview.npmjs.com/package/bcryptjs/v/1.0.1</p> 

`$ npm i --save bcryptjs`
<h2>APP - React</h2>
<p>
	Agora vamos criar uma tela de login para se comunicar com a nossa API.<br  />
	O comando abaixo irá criar a estrutura padrão para iniciarmos.<br  />
	Obs: Rode o comando fora da pasta/projeto API.<br  />
	Teremos dois diretórios: API e APP.
</p> 

`$ npx create-react-app app`
<p>
	Rode o comando NPM start para abrir o projeto no browser "http://localhost:3000/". <br  />
	Se tudo der certo, irá abrir com o logotipo do React.
</p> 

![Estrutura inicial do APP](https://github.com/givisiez/imersao8/blob/main/images/estrutura-app.png?raw=true)

<h2>Deploy</h2>
<p>
	Iremos utilizar duas plataformas grátis para hospedar nossas aplicações.
	O obejtivo de separa é só para demonstrar a prática em separar os serviços.
	Mas poderia deixar tudo na plataforma do Heroku, por exemplo.
</p>
<h3>Vercel</h3>
<p>
	Para publicar o app React. <br/>
	https://vercel.com/
</p>
<h3>Heroku</h3>
<p>
	Para hospedar a API NodeJs com banco Mysql. <br  />
	https://id.heroku.com
</p>
<h2>Rotas</h2>

`$ npm install --save react-router-dom`
<p>Dependência responsável para gerenciar as rotas</p>

<h3>history (Vrs. 4)</h3>

`$ npm install --save history`
<p>
	Utilizado para mudar de página e renderizar a nova página sem recarregar toda a aplicação
	https://github.com/remix-run/history/blob/v4/docs/Installation.md
</p>

`$ npm install --save react-router-dom`
<p>Dependência responsável para gerenciar as rotas</p>

<h2>History (Vrs. 4)</h2>

`$ npm install --save history@4.9.0`
<p>
	Utilizado para mudar de página e renderizar a nova página sem recarregar toda a aplicação. </br>
	https://github.com/remix-run/history/blob/v4/docs/Installation.md
</p>

<h2>Font Awesome</h2>
<p>
	Adicionar ícones para o projeto.</br>
	https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
</p>

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm install --save @fortawesome/free-solid-svg-icons
$ npm install --save @fortawesome/react-fontawesome
```