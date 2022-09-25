const express = require("express");
const dotenv = require("dotenv");
const { ObjectID } = require("bson");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require('cors');

app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/", require("./routes"));



//make envirment variable available
dotenv.config();

app.use("/contacts", require("./routes/contacts.js"));

//working code
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
