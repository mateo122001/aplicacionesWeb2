const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const aprendizajeRoutes=require("./controler&routes/aprendizaje")
require("dotenv").config()

const app=express()

app.use(cors()).use(express.json())
const port= process.env.PORT || 9000
app.use("/api", aprendizajeRoutes)


app.get("/", (req, res)=>{
res.send("welcome to my api")
})



mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("CONECTADO BRO"))
.catch((error)=>console.error(error))

app.listen(port, ()=>{
    console.log("Servidor escuchando en el puerto", port )
})