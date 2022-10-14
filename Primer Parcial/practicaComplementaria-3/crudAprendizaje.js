

const saveIdioma1=require("./crudIdioma")
const SaveInstructor1=require("./crudInstructor")
const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";

async function crudAprendizaje(){
    const establishConnection=await mongoose.connect(urlConnection)

    const Aprendizaje=mongoose.model("Aprendizaje", {idIdioma:{type:mongoose.Types.ObjectId, ref:"Idioma"}, 
    idInstructor:{type:mongoose.Types.ObjectId, ref:"Instructor"}})

    const aprendizaje1=new Aprendizaje({idIdioma:saveIdioma1._id, idInstructor:SaveInstructor1._id})
    const saveAprendizaje1=await aprendizaje1.save()

    console.log(`Se guardo de manera exitosa el instructor: ${saveAprendizaje1}`)

    const results=await Aprendizaje.find()

    console.log(`Los elementos disponibles en esta entidad o modelo son: ${results}`)
}

crudAprendizaje()