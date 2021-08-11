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
    res.header("Access-Control-Allow-Origin", process.env.URL_REQUEST);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-H747777777777eaders", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/login/list', tokenValidCheck, async (req, res) => {
    await User.findAll({
        order: [['idUser', 'DESC']]
    }).then(function(users){
        return res.status(200).json({
            error: false,
            users
        });
    }).catch(function(){
        return res.status(200).jason({
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
            msg: "Usuário cadastrado com sucesso!"
        })
    }).catch(function() {
        return res.status(400).json({
            error: true,
            msg:"Erro ao realizar o cadastro!",
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

app.get('/login', async (req, res) => {
    let getKeyParams =  req.query.id;

    const checkUser = await User.findOne({
        where: {
            uuid: getKeyParams
        }
    });

    if (checkUser === null) {
        res.status(200).json({
            error: true,
            message: 'Usuário não encontrado'
        });
    } else {
        return res.status(200).json({
            error: false,
            data: [
                {
                    uuid: checkUser.uuid,
                    name: checkUser.name,            
                    email: checkUser.email 
                }
            ]            
        });
    }
});

// UPDATE
app.put('/login/update/password', tokenValidCheck, async (req, res) => {
    var data = req.body;
    data.password = await bcrypt.hash(data.password, 10);
    
    if(!data.uuid) {
        return res.status(404).json({
            error: true,
            message: "Não foi possível atualizar a senha!",
            step: 0
        });
    }

    const checkUser = await User.findOne({
        where: {
            uuid: data.uuid           
        }
    });

    if(checkUser === null) {
        return res.status(404).json({
            error: true,
            message: "Não foi possível atualizar a senha!",
            step: 1
        });
    }

    await User.update(data, { 
        where: { 
            uuid: data.uuid 
        } 
    }).then(function(){
        res.status(200).json({
            error: false,
            message: 'Senha atualizada com sucesso!'
        });
    }).catch(function(err) {
        res.status(404).json({
            error: true,
            message: 'Não foi possível atualizar a senha!',
            step: 2
        });
    }); 
    
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});