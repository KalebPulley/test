const { MongoClient } = require("mongodb");
const {ObjectID} = require("mongodb");

async function returnAll(req, res){
    //connect to the database
    //conection string
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      //test conection
      //await listDatabases(client);
      const result = await getAllContacts(client);
      res.status(200).send(result);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  
}

async function returnOne(req, res){
    //connect to the database
    //conection string
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      //test conection
      //await listDatabases(client);
      const result = await getOneContact(client, req.query.id );
      if (!result){
        res.status(404).send("no id found");
      }else{
        res.status(200).send(result);
      }
      
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  
}

//POST ie create a document
async function createOne(req, res){
  //connect to the database
  //conection string
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //test conection
    //await listDatabases(client);
    const result = await createOneContact(client, JSON.parse(req.query.contact));
    if (!result){
      res.status(404).send("no id found");
    }else{
      res.status(201).send(result);
    }
    
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

}

//PUT ie update a document
async function updateOne(req, res){
  //connect to the database
  //conection string
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //test conection
    //await listDatabases(client);
    console.log(req.query.contact);
    const result = await UpdateOneContact(client, req.query.id, JSON.parse(req.query.contact));
    if (!result){
      res.status(404).send("no id found");
    }else{
      res.status(204).end();
    }
    
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

}

//DELETE a document
async function deleteOne(req, res){
  //connect to the database
  //conection string
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //test conection
    //await listDatabases(client);
    const result = await deleteOneContact(client, req.query.id);
    if (!result){
      res.status(404).send("no id found");
    }else{
      res.status(200).send("deleted successfuly!");
    }
    
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

}

async function returnOne(req, res){
  //connect to the database
  //conection string
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qcchu6m.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //test conection
    //await listDatabases(client);
    const result = await getOneContact(client, req.query.id );
    if (!result){
      res.status(404).send("no id found");
    }else{
      res.status(200).send(result);
    }
    
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

}

//databases get calls

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

//Post: create a new document(Requires a Json object code 201)
async function createOneContact(client, contactObject) {
  const result = await client
    .db("contacts")
    .collection("contacts")
    .insertOne(contactObject);
  console.log(result);
  return result;
}

//Put: update an existing document(Requires an ID and a Json object return updated document ID code 204)
async function UpdateOneContact(client, ID, contactObject) {
  const result = await client
    .db("contacts")
    .collection("contacts")
    .updateOne({_id: ObjectID(`${ID}`)}, {$set: contactObject});
  console.log(result);
  return result;
}

//Delete: delete a document(requires an ID code 200)
async function deleteOneContact(client, ID) {
  const result = await client
    .db("contacts")
    .collection("contacts")
    .deleteOne({_id: ObjectID(`${ID}`)});
  console.log(result);
  return result;
}

//testing 

module.exports = {
returnAll,
returnOne,
createOne,
updateOne,
deleteOne
};
