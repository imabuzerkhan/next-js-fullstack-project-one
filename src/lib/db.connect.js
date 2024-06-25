import mongoose from "mongoose";

const connection = {};

async function dbconnect(){
  if(connection.isconnected){
    console.log("already connect")
    return
  }
  try{
    const db = await mongoose.connect(process.env.MONGODB_URI || " " , {})

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch(error){
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}
export default dbconnect