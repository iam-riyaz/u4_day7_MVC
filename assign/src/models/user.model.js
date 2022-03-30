const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    gender:{type:String,required:true},
    dateOfBirth:{type:Date, required:true},
    type:{type:String,required:true}
},
{timestamps:true,
versionKey:false})

const User=mongoose.model("user2",userSchema)

module.exports=User

