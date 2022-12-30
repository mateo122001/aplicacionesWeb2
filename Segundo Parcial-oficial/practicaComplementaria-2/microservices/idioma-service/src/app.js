
const express=require("express")
const idiomaSchema=require("./model/idioma")
const router=express.Router()



router.get("/idiomas",(req, res)=>{
    idiomaSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})

router.post("/idiomas",(req,res)=>{
    const idioma=idiomaSchema(req.body)
    idioma.save()
    .then(()=>res.send("Idioma creado con éxito"))
    .catch((error)=>res.send({message:error}))
})


router.get("/idiomas/:id", (req, res)=>{
const {id}=req.params
idiomaSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/idiomas/:id",(req, res)=>{
const {id}=req.params
const {descripcion}=req.body
idiomaSchema.updateOne({_id: id}, {$set: {descripcion}})
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})


router.delete("/idiomas/:id",(req, res)=>{
    const {id}=req.params
    idiomaSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router