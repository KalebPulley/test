//require the express modlue and the router portion of it.
const routes = require('express').Router();
//et the controller module.
const controllers = require('../controllers/index');
//call the function from the controllers
routes.get('/', controllers.returnData);
//export the module
module.exports = routes;