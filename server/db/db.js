const mongoose = require('mongoose');

const connectToDb =async()=> {
  try{
   await mongoose.connect(
      "mongodb+srv://samuelgide88_backery_user:samuelgide88_backery_user@cluster0.y9l69jp.mongodb.net/"
    )
    
    console.log("mongoose successfully connected")
  } catch(e){
    console.log(e);
    process.getMaxListeners(1);
  }
};


module.exports = connectToDb;