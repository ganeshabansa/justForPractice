const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const MONGODB_URI = 'mongodb+srv://root:Onkar2000@atlascluster.4qaardu.mongodb.net/?retryWrites=true&w=majority';

    // Create Mongoose connection options
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, mongooseOptions);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1); // Exit the application on database connection error
  }
};

module.exports = connectToDatabase;
