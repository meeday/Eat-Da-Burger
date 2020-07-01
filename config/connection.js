const mysql = require("mysql");
const config = require("./config");

const connection = mysql.createConnection({
  host: 'zpfp07ebhm2zgmrm.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'ja1p8r2wsgniy1ib',
  password: config.db.password,
  port: 3306,
  database: 'c6cxybzw9u7zvicp'});


module.exports = connection;


