require("dotenv").config()
const express = require('express');
const connectToDb = require('./db/db');
const authRouter = require('./routes/auth-routes');

const app = express()
const PORT = process.env.PORT || 5000

connectToDb()


app.use(express.json());
app.use("api/auth", authRouter)

app.listen(PORT ,()=>{
  console.log(`Server connected successfully on port ${process.env.PORT}`);
})