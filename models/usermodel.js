
let mongoose = require("mongoose")

let db = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user = mongoose.model('user',db)
module.exports = user