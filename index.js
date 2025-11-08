const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const UserRoutes = require('./Routes/Userroutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', UserRoutes);
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Welcome to GameRepo API");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {console.error("❌ MongoDB connection error:", err);
    console.error("❌ MongoDB connection error:", err);
    console.log(process.env.MONGO_URI);
  });
