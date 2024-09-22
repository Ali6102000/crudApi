import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid';


async function connectToDb(uri){
   try {
   let mongoClient;  
    mongoClient=new MongoClient(uri);
    mongoClient.connect();
    console.log("connection to mongo database succeded!!!");
    return mongoClient;
   } catch (error) {
    console.error("connection to mongo database failed!!!")
   }
}

export async function createStudentDocument(studentobj){
   let mongoClient;
   let db={};
   try {
      let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      studentobj._id=uuidv4();
      await collection.insertOne(studentobj)
   } catch (error) {
      console.log("error while creating student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}

export async function removeStudentDocument(_id){
   let mongoClient;
   let db={};
   try {
      let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      //studentobj._id=uuidv4();
      await collection.deleteOne({_id})
   } catch (error) {
      console.log("error while deleting student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}

export async function getAllStudents(){
   let mongoClient;
   let db={};
   try {
      let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      //studentobj._id=uuidv4();
      return await collection.find({}).toArray();
   } catch (error) {
      console.log("error while deleting student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}

export async function getSingleStudent(_id){
   let mongoClient;
   let db={};
   try {
      let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      //studentobj._id=uuidv4();
      return await collection.findOne({_id});
   } catch (error) {
      console.log("error while deleting student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}