const mongoose = require("mongoose");
const connectDatabase =( )=>{
    mongoose.connect(process.env.DB_URI,{ useUnifiedTopology:true }).then((data)=>{
        console.log(`MongoDB connected with serve : ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDatabase;
