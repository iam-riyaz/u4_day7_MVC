const express=require("express")
const Student = require("../models/student.model")
const Submission = require("../models/submission.model")



const app=express()




app.post("",async(req,res)=>{
    try{
const student =await Student.create(req.body)
return res.status(201).send(student)
    }
    catch(err)
    {
return res.status(500).send(err.message)
    }
})


app.get("",async(req,res)=>{
    try
    {
    const student =await Student.find({}).lean().exec()
        return res.status(201).send(student)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})

app.get("/id",async(req,res)=>{
    try{
    const student=await Submission.findById(req.params.id).populate("student_id")
    return res.status(200).send(student)

    }
    catch
    {
        return res.status(500).send(err.message)
    }
})


module.exports=app