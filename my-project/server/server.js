const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlists");
const dbConfig = require("./config/db");
const User = require("./models/User");
const cors=require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors());




// Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.aqj59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.error(err));

  app.use(express.json());


app.use('/api/auth',authRoutes);
app.use('/api/songs',songRoutes);
app.use('/api/playlists',playlistRoutes);

  

app.listen(PORT, () => {
  console.log(`Your server is listening at port: ${PORT}`);
});
