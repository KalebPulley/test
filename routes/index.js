//require the express modlue and the router portion of it.
const routes = require("express").Router();
const { Router } = require("express");
//get the controller module.
const controllers = require("../controllers/index");
//call the function from the controllers
routes.get("/", controllers.returnData);
routes.use("/", require("./swagger"));
routes.use("/contacts", require("./contacts"));
//export the module
module.exports = routes;
