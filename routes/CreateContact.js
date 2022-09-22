//require the express module the router portion of it.
const routes = require("express").Router();
const database = require("../controllers/database")
//call the function from the controllers
//routes.get("/", database.returna);

routes.get('/', database.createOne);

//export the module
module.exports = routes;
