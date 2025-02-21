const mongoose = require('mongoose');
require('dotenv').config(); 

const mongo_db = process.env.URI;


mongoose.connect(mongo_db)
.then( ()=> {
    console.log("Database connected..!");
})
.catch( (err)=>{
    console.log("Connection failed..!", err);
})

module.exports = mongoose;
