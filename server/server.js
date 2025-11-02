require("dotenv").config()
const express = require('express');
const connectToDb = require('./db/db');
const authRouter = require('./routes/auth-routes');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express()
const PORT = process.env.PORT || 5000

connectToDb()
app.use(cors({
  origin : "http://localhost:5173",
  methods : [ 'GET', 'PUT', 'POST', 'DELETE'],
  Credential : true
}))

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter)

app.listen(PORT ,()=>{
  console.log(`Server connected successfully on port ${process.env.PORT}`);
})