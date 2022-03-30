const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

const userController=require("./controllers/user.controller")
const studentController=require("./controllers/student.controller")
const batchController=require("./controllers/batch.controller")
const evaluationController=require("./controllers/evaluation.controller")
const submissionController=require("./controllers/submission.controller")


app.use("/user",userController)
app.use("/student",studentController)
app.use("/batch",batchController)
app.use("/evaluation",evaluationController)
app.use("/submission",submissionController)



const connect=require("./configs/db")


app.listen(2000,async()=>{
    try{
        await connect()
         console.log("port 2000 for MVC is working fine")
    }
    catch
    {
          console.log("MVC 2000 port is nor working, fix this as soon as possible")
    }

})