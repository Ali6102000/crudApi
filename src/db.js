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

export async function createStudentDocument(studentobj,uri){
   let mongoClient;
   let db={};
   try {
      //let uri=process.env.MONGO_DB_CONNECTION;
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

export async function removeStudentDocument(_id,uri){
   let mongoClient;
   let db={};
   try {
     // let uri=process.env.MONGO_DB_CONNECTION;
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

export async function getAllStudents(uri){
   let mongoClient;
   let db={};
   try {
      //let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      //studentobj._id=uuidv4();
      return await collection.find({}).toArray();
   } catch (error) {
      console.log("error while finding students ");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}

export async function getSingleStudent(_id,uri){
   let mongoClient;
   let db={};
   try {
      //let uri=process.env.MONGO_DB_CONNECTION;
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      //studentobj._id=uuidv4();
      return await collection.findOne({_id});
   } catch (error) {
      console.log("error while finding the student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }

}

export async function updateStudent(id,newAge,uri){
   let mongoClient;
   let db={};
   try {
      mongoClient=await connectToDb(uri);
      db=mongoClient.db("school");
      const collection=db.collection("students");
      await collection.updateOne({_id:id},{$set:{age:newAge}})
   } catch (error) {
      console.log("error while updating student document");
   }
   finally{
      mongoClient.close()
      console.log("this line of code will be executed regardeless if the previous code threw an error or not");
   }
}






// import { MongoClient } from "mongodb";
// import { v4 as uuidv4 } from 'uuid';

// async function connectToDb(uri) {
//    let mongoClient;
//    try {
//       mongoClient = new MongoClient(uri);
//       await mongoClient.connect();  // Await the connection to complete
//       console.log("Connection to MongoDB database succeeded!");
//       return mongoClient;  // Only return the client if connection is successful
//    } catch (error) {
//       console.error("Connection to MongoDB database failed!", error);
//       return null;  // Return null in case of failure
//    }
// }

// export async function createStudentDocument(studentobj, uri) {
//    let mongoClient;
//    let db = {};
//    try {
//       mongoClient = await connectToDb(uri);
//       if (!mongoClient) {
//          throw new Error("MongoDB connection failed, cannot create student.");
//       }
//       db = mongoClient.db("school");
//       const collection = db.collection("students");
//       studentobj._id = uuidv4();
//       await collection.insertOne(studentobj);
//    } catch (error) {
//       console.log("Error while creating student document", error);
//    } finally {
//       if (mongoClient) {
//          mongoClient.close();  // Only close if mongoClient is valid
//       }
//       console.log("MongoDB client closed (if it was open).");
//    }
// }

// export async function removeStudentDocument(_id, uri) {
//    let mongoClient;
//    let db = {};
//    try {
//       mongoClient = await connectToDb(uri);
//       if (!mongoClient) {
//          throw new Error("MongoDB connection failed, cannot remove student.");
//       }
//       db = mongoClient.db("school");
//       const collection = db.collection("students");
//       await collection.deleteOne({ _id });
//    } catch (error) {
//       console.log("Error while deleting student document", error);
//    } finally {
//       if (mongoClient) {
//          mongoClient.close();  // Only close if mongoClient is valid
//       }
//       console.log("MongoDB client closed (if it was open).");
//    }
// }

// export async function getAllStudents(uri) {
//    let mongoClient;
//    let db = {};
//    try {
//       mongoClient = await connectToDb(uri);
//       if (!mongoClient) {
//          throw new Error("MongoDB connection failed, cannot retrieve students.");
//       }
//       db = mongoClient.db("school");
//       const collection = db.collection("students");
//       return await collection.find({}).toArray();
//    } catch (error) {
//       console.log("Error while finding students", error);
//    } finally {
//       if (mongoClient) {
//          mongoClient.close();  // Only close if mongoClient is valid
//       }
//       console.log("MongoDB client closed (if it was open).");
//    }
// }

// export async function getSingleStudent(_id, uri) {
//    let mongoClient;
//    let db = {};
//    try {
//       mongoClient = await connectToDb(uri);
//       if (!mongoClient) {
//          throw new Error("MongoDB connection failed, cannot retrieve student.");
//       }
//       db = mongoClient.db("school");
//       const collection = db.collection("students");
//       return await collection.findOne({ _id });
//    } catch (error) {
//       console.log("Error while finding the student document", error);
//    } finally {
//       if (mongoClient) {
//          mongoClient.close();  // Only close if mongoClient is valid
//       }
//       console.log("MongoDB client closed (if it was open).");
//    }
// }

// export async function updateStudent(id, newAge, uri) {
//    let mongoClient;
//    let db = {};
//    try {
//       mongoClient = await connectToDb(uri);
//       if (!mongoClient) {
//          throw new Error("MongoDB connection failed, cannot update student.");
//       }
//       db = mongoClient.db("school");
//       const collection = db.collection("students");
//       await collection.updateOne({ _id: id }, { $set: { age: newAge } });
//    } catch (error) {
//       console.log("Error while updating student document", error);
//    } finally {
//       if (mongoClient) {
//          mongoClient.close();  // Only close if mongoClient is valid
//       }
//       console.log("MongoDB client closed (if it was open).");
//    }
// }
