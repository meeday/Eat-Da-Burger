const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  db:{
    password: process.env.DATABASE_PASSWORD,
  }
}
