const express=require("express")

const Evaluation=require("../models/evaluation.model")

const app=express()




app.post("",async(req,res)=>{
    try{
const evaluation =await Evaluation.create(req.body)
return res.status(201).send(evaluation)
    }
    catch(err)
    {
return res.status(500).send(err.message)
    }
})


app.get("",async(req,res)=>{
    try
    {
    const evaluation =await Evaluation.find({}).lean().exec()
        return res.status(201).send(evaluation)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})

app.get("/:id",async(req,res)=>{
    try{

        const students=await Evaluation.findById(req.params.id).populate({path:"submission_id",populate:{path:"student_id",populate:{path:"roll_id"}}}).lean().exec()
        return res.status(200).send(students)

    }
    catch
    {

    }
})



module.exports=app