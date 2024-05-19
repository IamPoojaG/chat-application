import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('MongoDB connected');
    });

    connection.on('error', (error) => {
      console.log('Something is wrong in mongoDB', error);
    });
  } catch (error) {
    console.log('Something wrong', error);
  }
}

export default connectDB;
