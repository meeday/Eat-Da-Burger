const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  db:{
    url:process.env.DATABASE_URL
  }
  

}

