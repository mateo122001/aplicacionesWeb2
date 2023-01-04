
const mongoose=require("mongoose")

const aprendizajeSchema=mongoose.Schema({
    nombre:{
    type:String,
    required:true
},
    id_idioma:{
    type:String,
    required:true
},
    id_instructor:{
    type:String,
    required:true
},
    fecha:{
    type:Date,
    default:Date.now
},
    hora:{
    type:String,
    required:true
},
    horas_curso:{
    type:String,
    required:true
},
    nivel:{
    type:String,
    required:true
}
})

module.exports=mongoose.model("Aprendizaje", aprendizajeSchema)