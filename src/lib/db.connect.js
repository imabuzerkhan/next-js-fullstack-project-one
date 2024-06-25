import mongoose from 'mongoose'; // mongoose library ko import kar rahe hain

const connection = {}; // ek empty object banaya connection ke liye

async function dbConnect() {
  // Database ke saath connection check kar rahe hain ya dekh rahe hain ki connection already establish hai
  if (connection.isConnected) {
    console.log('Already connected to the database'); // Agar pehle se connected hai to message print hoga
    return; // aur function return kar jayega
  }

  try {
    // Database ke saath connection establish karne ki koshish kar rahe hain
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {}); // MongoDB URI se database connect kar rahe hain

    connection.isConnected = db.connections[0].readyState; // Connection ka status update kar rahe hain

    console.log('Database connected successfully'); // Agar connection successful ho jaye to message print hoga
  } catch (error) {
    console.error('Database connection failed:', error); // Agar connection fail ho jaye to error message print hoga

    // Connection error ke case me process ko exit kar rahe hain
    process.exit(1); // Error ke case me process ko terminate kar dete hain
  }
}

export default dbConnect; // dbConnect function ko export kar rahe hain
