const { Sequelize } = require('sequelize');

const conn = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        dialect: 'mysql'
    }
);

// conn.authenticate().then(function() {
//     console.log('Conexão ok!');
// }).catch(function(err) {
//     console.log('Erro ao conectar!');
// })

module.exports = conn;