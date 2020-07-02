// require mysql package into file
const mysql = require("mysql");
// require config file to access db object for database connection
const config = require("./config");
// connection to mysql database created
const connection = mysql.createConnection(config.db.url);

// connection const exported
module.exports = connection;


