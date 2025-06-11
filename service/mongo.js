import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
