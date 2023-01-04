
const express=require("express")
const router =express.Router()
const aprendizajeSchema=require("./aprendizajeSchema")

router.get("/aprendizaje", (req, res)=>{
aprendizajeSchema.find()

//en vez de data se debe colocar aprendizajes
.then((aprendizajes)=>res.json({aprendizajes}))
.catch((error)=>res.send({message:error}))
})

//esto funcionó despues de quitarle la interfaz "Aprenidazaje" que se envia desde el frontend llamada "data"
router.post("/aprendizaje",(req, res)=>{
const aprendizaje=new aprendizajeSchema(req.body)
aprendizaje.save()
.then((aprendizaje)=>res.json(aprendizaje))
.catch((error)=>res.send({message:error}))
})

//el res.json debe retornar "aprendizaje" sin las llaves
router.get("/aprendizaje/:id", (req, res)=>{
const {id}= req.params
aprendizajeSchema.findById(id)
.then((aprendizaje)=>res.json(aprendizaje))
.catch((error)=>res.send({message:error}))
})

router.delete("/aprendizaje/:id",(req, res)=>{
const {id}=req.params
aprendizajeSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

router.put("/aprendizaje/:id",(req, res)=>{
    const {id}=req.params
    const {nombre, id_idioma, id_instructor, hora, horas_curso, nivel}=req.body
    aprendizajeSchema.updateOne({_id:id}, {$set:{nombre, id_idioma, id_instructor, hora, horas_curso, nivel}})
    .then((aprendizaje)=>res.json({nombre}))
    .catch((error)=>res.json({message:error}))
})

module.exports=router