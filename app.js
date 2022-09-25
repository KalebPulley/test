const express = require("express");
const dotenv = require("dotenv");
const { ObjectID } = require("bson");
const app = express();





//make envirment variable available
dotenv.config();

app.use("/contacts", require("./routes/contacts.js"));

//working code
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
