const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

let connection;

if (process.env.DATABASE_URL) {
connection = mysql.createConnection(process.env.DATABASE_URL);
} else {
  connection = mysql.createConnection({

    host: "localhost",
    port:3306,
    user: "root",
    password: "RAVensGATE.1!",
    database: "burgers_db"
  });
}


module.exports = connection;