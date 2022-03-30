const express=require("express")

const Submission=require("../models/submission.model")

const app=express()




app.post("",async(req,res)=>{
    try{
const submission =await Submission.create(req.body)
return res.status(201).send(submission)
    }
    catch(err)
    {
return res.status(500).send(err.message)
    }
})


app.get("",async(req,res)=>{
    try
    {
    const submission =await Submission.find({}).lean().exec()
        return res.status(201).send(submission)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})

app.get("/:id",async(req,res)=>{
    try
    {
       const students= await Submission.findById(req.params.id)
       return res.status(200).send(students)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})


module.exports=app