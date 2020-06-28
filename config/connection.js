const mysql = require("mysql");
const dotenv = require("dotenv");

const config = require("./config");

dotenv.config();


let connection;

if(process.env.DATABASE_URL) {
 connection = mysql.createConnection(process.env.DATABASE_URL);
} else
 connection = mysql.createConnection({
  host: config.host,
  port:3306,
  user:config.user,
  password: config.password,
  database: "burgers_db"
});

module.exports = connection;