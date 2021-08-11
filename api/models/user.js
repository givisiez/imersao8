const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('tbUsers', {
    idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    uuid: {
        type: Sequelize.CHAR(36),
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    }, 
    name: {
        type: Sequelize.STRING(128),
        allowNull: false      
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false 
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// User.sync(); // Se não existir a tabela tbUsers, irá criar.

module.exports = User;