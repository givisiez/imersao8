const Op = require('sequelize');
const db = require('./database');

const User = db.define('tbUsers', {
    idUser: {
        type: Op.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    uuid: {
        type: Op.CHAR(36),
        defaultValue: Op.UUIDV4,
        allowNull: false
    }, 
    name: {
        type: Op.STRING(128),
        allowNull: false      
    },
    email: {
        type: Op.STRING(128),
        allowNull: false 
    },
    password: {
        type: Op.STRING,
        allowNull: false
    },
    idStatus: {
        type: Op.INTEGER,
        allowNull: false
    }
});

// User.sync(); // Se não existir a tabela tbUsers, irá criar.

module.exports = User;