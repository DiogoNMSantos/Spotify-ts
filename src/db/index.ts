import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27022');
    console.log('connected to mongo');
  } catch (err: any) {
    console.log(err);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
};

export { connectDB, disconnectDB };
