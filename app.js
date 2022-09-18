const express = require('express');
const dotenv = require("dotenv");
const { ObjectID } = require('bson');
const app = express();
const port = process.env.PORT || 3000;

//make envirment variable available
dotenv.config();

app.use('/contacts', require('./routes/contacts.js'));
app.use('/contact', require('./routes/contact.js'));
// app.get('/contacts/one',(req, res)=>{
//   const route = require('./routes/contacts');
//   express.Router.get('/', route.AllData);
//   });

//working code
 app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})