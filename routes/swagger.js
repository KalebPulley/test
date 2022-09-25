const routes = require("express").Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
//call the function from the controllers
//routes.get("/", database.returna);

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocument));

//export the module
module.exports = routes;
