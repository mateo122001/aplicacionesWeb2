
const instructorSchema=require("./model/instructor")
const express=require("express")
const router=express.Router()

router.get("/instructor",(req, res)=>{
    instructorSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})


router.post("/instructor", (req, res)=>{
const instructor=instructorSchema(req.body)
instructor.save()
.then((data)=> res.send(data))
.catch((error)=>res.send({message:error}))
})


router.get("/instructor/:id",(req, res)=>{
const {id}=req.params
instructorSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/instructor/:id",(req, res)=>{
const {id}=req.params
const {nombre, experiencia}=req.body
instructorSchema.updateOne({_id:id}, {$set: {nombre, experiencia}})
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})



router.delete("/instructor/:id",(req, res)=>{
const {id}=req.params
instructorSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

module.exports=router