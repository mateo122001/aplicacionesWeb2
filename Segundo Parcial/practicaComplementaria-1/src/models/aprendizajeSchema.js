const mongoose=require("mongoose")

const aprendizajeSchema=mongoose.Schema({
    idIdioma:{type:String, 
        required:true},

    idInstructor:{type:String,
         required:true},

    fecha:{type:String, 
        required:true},

    hora:{type:String, 
        required:true},

    horasCurso:{type:String,
         required:true},

    nivel:{type:String, 
        required:true}

})
//mongo cambia la primer letra por minuscula y agrega una s en el final de la collecion

module.exports=mongoose.model("aprendizaje", aprendizajeSchema)