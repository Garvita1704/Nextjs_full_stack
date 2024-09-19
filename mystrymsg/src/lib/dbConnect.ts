import mongoose from "mongoose";

type ConnectionObject = {
  isConnected? : number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void>{ //void here means it doesnt matter what we are getting 
 if(connection.isConnected){
  console.log("already connected");
  return;
 }

 try{
  const db = await mongoose.connect(process.env.MONGODB_URI || '',{})

  connection.isConnected = db.connections[0].readyState 

  console.log("DB Connected Succesfully");
 }catch(error){
  console.log("Error connecting to DB");
  process.exit(1);
 }
 
}

export default dbConnect; 
