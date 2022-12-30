
const mongoose=require("mongoose")

const idiomaSchema=mongoose.Schema({
    descripcion:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Idioma", idiomaSchema)