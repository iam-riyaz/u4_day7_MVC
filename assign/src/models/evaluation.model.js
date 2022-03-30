const mongoose=require("mongoose")


const evaluationSchema=new mongoose.Schema({
    date_of_evaluation:{type:Date,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch" ,required:true},
    submission_id:{type:mongoose.Schema.Types.ObjectId,ref:"submission",required:true}
},
{timestamps:true,
versionKey:false})

const Evaluation=mongoose.model("evaluation",evaluationSchema)

module.exports=Evaluation