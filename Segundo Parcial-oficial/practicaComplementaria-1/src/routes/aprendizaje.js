const express=require("express")
const router=express.Router()
const aprendizajeSchema=require("../models/aprendizajeSchema")
router.get("/", ()=>{
    
})

router.post("/aprendizaje",(req, res)=>{
const aprendizaje=aprendizajeSchema(req.body);
aprendizaje.save()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error})
)
})

router.get("/aprendizaje",(req, res)=>{
aprendizajeSchema.find()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))
})
    

router.put("/aprendizaje/:id",(req, res)=>{
const {id}=req.params;
const {idIdioma, idInstructor, fecha, hora, horasCurso, nivel}=req.body
aprendizajeSchema.updateOne({_id:id}, {$set:{idIdioma, idInstructor, fecha, hora, horasCurso, nivel}})
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))
})


router.delete("/aprendizaje/:id",(req, res)=>{
    const {id}=req.params;
    aprendizajeSchema.remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})





module.exports=router