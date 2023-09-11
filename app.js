const express = require('express')
const cors = require('cors');

const connectToDatabase = require('./db/connection');

//Models
const User = require('./modals/UserSchema');
const Exam = require('./modals/ExamSchema');
const ExamResult = require('./modals/ExamResultsSchema');


//Routes
const authRoute= require('./routes/AuthRoute');
const examRoute = require('./routes/ExamRoute');
const examResultRoute = require('./routes/ExamResultRoute');
const authMiddleware = require('./middleware/authMiddleware');

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
