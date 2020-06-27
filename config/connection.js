const mysql = require("mysql");

const config = require("./config");

const connection = mysql.createConnection({
  host: config.host,
  port:3306,
  user:config.user,
  password: config.password,
  database: "burgers_db"
});

connection.connect(err => {
  if(err) {
    console.error("error connecting " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;