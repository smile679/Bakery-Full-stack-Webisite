const mongoose = require('mongoose');

const connectToDb =async()=> {
  try{
   await mongoose.connect(process.env.MONGOOSE_URI)
   console.log("mongoose successfully connected")
  } catch(e){
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectToDb;