const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const userRoutes=require("./routes/aprendizaje")
const app=express()
const port= process.env.PORT || 1000

app.use(express.json())
//middleware
app.use("/api", userRoutes)

app.get("/", (req, res)=>{
res.send("Welcome to my app")
})
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_CNN).then(()=>{
    console.log("CONNECTED TO THE DATABASE")
}).catch((error)=>{
    console.log(error)
})


app.listen(port,()=>{
    console.log("listening on port", port)
}) 


