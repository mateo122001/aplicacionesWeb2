

const mongoose=require("mongoose")


const aprendizajeSchema=mongoose.Schema({
  
    idiomaId:{type:String},
    instructorId:{type:String},
    fecha:{type:String},
    hora:{type:String},
    numeroHorasCurso:{type:String},
    nivel: {type:String}
})



module.exports=mongoose.model("Aprendizaje", aprendizajeSchema)


/*

  idIdioma:String,
    idInstructor:String,
    fecha:String,
    hora:String,
    numeroHorasCurso:String,
    nivel: String
 idAprendizaje:{type:String},
    idIdioma:{type:String},
    idInstructor:{type:String},
    fecha:{type:String},
    hora:{type:String},
    numeroHorasCurso:{type:String},
    nivel: {type:String}

    */