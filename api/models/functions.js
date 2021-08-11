const mysql = require("mysql2/promise");

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,        
        waitForConnections: true,
        multipleStatements : true,
        debug: false,
        connectionLimit: 10,
        queueLimit: 0     
    });
    
    global.connection = connection;
    // console.log("Conexão com banco ok!");    
    return connection;
}

// connect();

module.exports = {connect}