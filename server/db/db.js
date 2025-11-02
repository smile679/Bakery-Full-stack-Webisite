const mongoose = require('mongoose');

const connectToDb =async()=> {
  try{
   await mongoose.connect(process.env.MONGOOSE_URL)
   console.log("mongoose successfully connected")
  } catch(e){
    console.log(e);
    process.getMaxListeners(1);
  }
};

module.exports = connectToDb;