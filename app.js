const express = require('express')
const connectToDatabase = require('./db/connection');
const cors = require('cors');

const User = require('./modals/UserSchema');
const Exam = require('./modals/ExamSchema');
const ExamResult = require('./modals/ExamResultsSchema');

const app = express()
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectToDatabase()
  .then(() => {
    // Start your Express.js server here
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database: ${error}`);
  });
