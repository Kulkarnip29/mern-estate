import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; // Importing the user router

dotenv.config();

const app = express();

// Connecting to MongoDB
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Starting the server
app.listen(3000, () => {
  console.log('Server is running on Port 3000!');
});

// Using the user router
app.use("/api/user", userRouter);
