require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const foodRoutes = require('./routes/food');

const app = express();

// Log environment variables (remove in production)
console.log('Environment check:', {
  mongoDBUri: process.env.MONGODB_URI ? 'defined' : 'undefined',
  nodeEnv: process.env.NODE_ENV
});

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});