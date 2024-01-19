import mongoose from 'mongoose';

let isConnected;

export const connectMongoDB = async () => {
  if (isConnected) {
    // console.log('Using existing MongoDB connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};