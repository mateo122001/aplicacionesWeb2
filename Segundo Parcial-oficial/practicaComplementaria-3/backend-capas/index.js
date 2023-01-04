const express =require("express")
const mongoose=require("mongoose")
const routerAprendizaje=require("./src/aprendizaje")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api", routerAprendizaje)


app.get("/", (req, res)=>{
    res.send("bien!")
})
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/aprendizaje")
.then(()=>console.log("connected to mongodb"))
.catch((error)=>console.log(error))

app.listen(2000,()=>{
    console.log("listening on port 2000")
})