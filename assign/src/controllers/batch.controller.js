const express=require("express")

const Batch=require("../models/batch.model")

const app=express()




app.post("",async(req,res)=>{
    try{
const batch =await Batch.create(req.body)
return res.status(201).send(batch)
    }
    catch(err)
    {
return res.status(500).send(err.message)
    }
})


app.get("",async(req,res)=>{
    try
    {
    const batch =await Batch.find({}).lean().exec()
        return res.status(201).send(batch)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})

module.exports=app