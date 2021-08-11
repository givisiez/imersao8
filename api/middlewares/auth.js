const jwt = require('jsonwebtoken');
const { promisify }  = require('util');
require('dotenv').config();

module.exports = {
    tokenValidCheck: async function (req, res, next) {
        const authHeader = req.headers.authorization;
        
        if (typeof authHeader !== 'string') {            
            return res.json({ 
                error: true,
                message: "Necessário realizar o login novamente!"
             });
        }
    
        const [, token] = authHeader.split(' ');     
        
        // verificar se token é válido
        try {            
            const decode = await promisify(jwt.verify)(token, process.env.SECRETE_KEY);
            // decodifica o token, pega o uuid retornado do banco ("/login" app.js) e compara
            req.userIdAuth = decode.userIdAuth;
            return next();
        } catch (err){
            const decode = await promisify(jwt.verify)(token, process.env.SECRETE_KEY);
            req.userIdAuth = decode.userIdAuth;         
            return res.status(400).json({ 
                error: true,
                message: "Login ou senha inválido! (Token expirado)",
                token: err
             });
        }    
    }
}