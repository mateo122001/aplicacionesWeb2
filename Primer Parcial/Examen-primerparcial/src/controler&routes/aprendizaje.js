const express=require("express")
const aprendizajeSchema=require("../models/aprendizaje")
const backupSchema=require("../models/aprendizaje")
const router=express.Router()

//create aprendizaje 

router.post("/aprendizajes", (req, res)=>{
    const cuerpo=req.body
const aprendizaje=aprendizajeSchema(cuerpo)

aprendizaje.save()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))

})

router.get("/aprendizajes", (req, res)=>{
aprendizajeSchema
.find()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))

})

//funcion para crear entidad espejo
router.post("/espejo", (req, res)=>{
aprendizajeSchema.find().then((data)=>{
    const backup=backupSchema({data})
    backup.save().then((dataRespaldo)=>res.json(dataRespaldo))
.catch((error)=>res.json({message:error}))
})


    
})

router.get("/espejo", (req, res)=>{
    backupSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
    
    })
    



module.exports=router
