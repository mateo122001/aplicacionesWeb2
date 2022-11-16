
const mongoose=require("mongoose")

const backupSchema=mongoose.Schema({
  
    idAprendizaje:{type:String},
    idIdioma:{type:String},
    idInstructor:{type:String},
    fecha:{type:String},
    hora:{type:String},
    numeroHorasCurso:{type:String},
    nivel: {type:String}
  })


  module.exports=model("Backup", backupSchema)