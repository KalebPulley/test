//require the express module the router portion of it.
const routes = require("express").Router();
const database = require("../controllers/database");
//call the function from the controllers
//routes.get("/", database.returna);

routes.get("/", database.returnAll);
routes.get("/:get-id", database.returnOne);

routes.post("/", database.createOne);

routes.put("/update-id", database.updateOne);

routes.delete("/:delete-id", database.deleteOne);

//export the module
module.exports = routes;
