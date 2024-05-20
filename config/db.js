let mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/jigar')

let db = mongoose.connection
db.on('connected',(error)=>{
    if(error){
        console.log(error);
    }
    console.log("db is on");
})

module.exports = db


