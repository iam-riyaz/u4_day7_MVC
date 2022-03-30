const mongoose= require("mongoose")

const connect=()=>{
    return mongoose.connect(`mongodb+srv://riyazMongo:Riyaz123@cluster0.nfiqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
}

module.exports=connect