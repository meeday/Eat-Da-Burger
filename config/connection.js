const mysql = require("mysql");

const config = require("./config");

 const connection = mysql.createConnection({
  host: config.host,
  port:3306,
  user:config.user,
  password: config.password,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});
// Make the connection to MySQL

module.exports = connection;