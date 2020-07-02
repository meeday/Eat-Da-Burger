//  npm packages required into file
const express = require("express");
const exphbs = require("express-handlebars");
// express app initialised
const app = express();
// port set to environment variable or default of 8080
const PORT = process.env.PORT || 8080;
// ensure static files are loaded correctly
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));
//require routes into this file set it as the middleware to be used
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// set handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// listening for a port 
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});