// require dotenv file
const dotenv = require("dotenv");
// initialise dotenv
dotenv.config();
// export db object containing environment variable
module.exports = {
  db:{
    url: process.env.JAWSDB_URL,
  }
}
