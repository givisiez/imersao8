const express = require('express');
// var router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { tokenValidCheck } = require('./middlewares/auth');
const db = require('./models/database');
const User = require('./models/user');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");//process.env.URL_REQUEST);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-H747777777777eaders", "X-PINGOTHER, Content-Type, Authorization");    
    app.use(cors());
    next();
});

app.get('/login/list', tokenValidCheck, async (req, res) => {
    await User.findAll({        
        where: {
            idStatus: [1,2,3]
        },
       order: [['idUser', 'DESC']]
    }).then(function(users) {
        return res.status(200).json({
            error: false,
            users
        });
    }).catch(function() {
        return res.status(200).json({
            error: true,
            message: 'Nenhum usuário localizado'
        });
    });
    return res.status(200).json({
        error:false,
        message:"Listar usuários"
    });
});

app.post('/login/create', async (req, res) => { 
    var data = req.body;
    data.password = await bcrypt.hash(data.password, 10);

    const checkUser = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if(checkUser) {
        res.status(200).json({
            error: true,
            message: 'Esse email já está sendo utilizado!'
        });
    }

    await User.create(data).then(function() {
        return res.status(200).json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    }).catch(function() {
        return res.status(400).json({
            error: true,
            message:"Erro ao realizar o cadastro!",
            error: ""
        });
    });
});

app.post('/login', async (req, res) => {
    const theUser = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if(theUser === null) {
        return res.status(200).json({
            error: true,
            message: "Usuário ou senha incorreto!"
        });
    }

   if(!(await bcrypt.compare(req.body.password, theUser.password))) {
        return res.status(200).json({
            error: true,
            message: 'Usuário ou senha incorreto!',
        })
    }

    const secretKey = process.env.SECRETE_KEY;
    var token = jwt.sign({ userIdAuth: theUser.uuid }, secretKey, {
        // expiresIn: 600 //10min
        expiresIn: '7d' // sete dias
    });

    return res.status(200).json({
        erros: false,
        message: 'Login realizado com sucesso!',
        token
    });
   
});

app.get('/login/:id', tokenValidCheck, async (req, res) => {
    await User.findOne({ where: { uuid: req.params.id } }).
    then(user => {
        return res.status(200).json({
            error: false,
            data: {
                uuid: user.uuid,
                name: user.name,
                email: user.email
            }
        });
    }).catch(function() {
        return res.status(404).json({
            error: true,
            message: "API: Usuário não encontrado!"
        });
    })
});

// UPDATE
app.put('/login/update', tokenValidCheck, async (req, res) => {
    var data = req.body;
    data.password = await bcrypt.hash(data.password, 10);
    
    if(!data.id) {
        return res.status(404).json({
            error: true,
            message: "Não foi possível atualizar os dados!",
            step: 0
        });
    }

    const checkUser = await User.findOne({
        where: {
            uuid: data.id           
        }
    });

    if(checkUser === null) {
        return res.status(404).json({
            error: true,
            message: "Não foi possível atualizar!",
            step: 1
        });
    }

    await User.update(data, { 
        where: { 
            uuid: data.id 
        } 
    }).then(function(){
        res.status(200).json({
            error: false,
            message: 'Dados atualizados com sucesso!',
            step: 2
        });
    }).catch(function(err) {
        res.status(404).json({
            error: true,
            message: 'Não foi possível atualizar a senha!',
            step: 3
        });
    }); 
    
});

// DELETE
/*
app.delete('/login/update/:id', tokenValidCheck, async (req, res) => {
    var data = req.body;   
    
    if(!data.id) {
        return res.status(404).json({
            error: true,
            message: "Não foi possível atualizar os dados!",
            step: 0
        });
    }

    await User.update(data.idStatus, { 
        where: {
            uuid: data.id,
            idStatus: [1, 2, 3]
        } 
    }).then(function(){
        res.status(200).json({
            error: false,
            message: 'Desativado com sucesso!',
            step: 2
        });
    }).catch(function(err) {
        res.status(404).json({
            error: true,
            message: 'Não foi possível realizar a solicitação!',
            step: 3
        });
    }); 
    
});
*/

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});