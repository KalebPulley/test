const { MongoClient } = require("mongodb");
const {ObjectID} = require("mongodb");

// //connect to the database
// async function main() {
//   //conection string
//   const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/test`;
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     //test conection
//     //await listDatabases(client);
//     await getAllContacts(client);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.close();
//   }
// }

async function returnAll(req, res){
    //connect to the database
    //conection string
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/test`;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      //test conection
      //await listDatabases(client);
      const result = await getAllContacts(client);
      res.send(result);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  
}

async function returnOne(req, res){
    //connect to the database
    //conection string
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/test`;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      //test conection
      //await listDatabases(client);
      const result = await getOneContact(client, req.query.id );
      if (!result){
        res.status(404).send("no id found");
      }else{
        res.send(result);
      }
      
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  
}

//databases get calls

//get all databases
// async function listdatabases(client) {
//   const databaseList = await client.db().admin().listDatabases();
//   console.log("databases:");
//   databaseList.databases.forEach((db) => {
//     console.log(`-${db.name}`);
//   });
// }

//get all function
async function getAllContacts(client) {
  const result = await client
    .db("contacts")
    .collection("contacts")
    .find({})
    .toArray();
  console.log(result);
  return result;
}

//get one function
async function getOneContact(client, contactId) {
  const result = await client
    .db("contacts")
    .collection("contacts")
    .findOne({ _id: ObjectID(`${contactId}`)});
  console.log(result);
  return result;
}

//testing main
// main().catch(console.error);

module.exports = {
returnAll,
returnOne
};
