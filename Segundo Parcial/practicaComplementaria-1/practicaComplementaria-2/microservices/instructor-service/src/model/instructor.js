
const mongoose=require("mongoose")

const instructorSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    experiencia:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Instructor", instructorSchema)