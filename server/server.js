require("dotenv").config()
const express = require('express');
const connectToDb = require('./db/db');
const app = express()
const PORT = 5000

app.use(express.json());
connectToDb()

app.listen(PORT ,()=>{
  console.log("Server connected successfully");
})