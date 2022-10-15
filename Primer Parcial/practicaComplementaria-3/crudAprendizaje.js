const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";

async function crudAprendizaje(){
    

    const establishConnection=await mongoose.connect(urlConnection)
    
    const Aprendizaje=mongoose.model("Aprendizaje", {idIdioma:{type:mongoose.Types.ObjectId, ref:"Idioma"}, 
    idInstructor:{type:mongoose.Types.ObjectId, ref:"Instructor"}, fecha:String, hora:String, horasCurso:String, nivel:String})
    
    const aprendizaje1=new Aprendizaje({idIdioma:saveIdioma1._id, idInstructor:SaveInstructor1._id,
    fecha:"10/10/2022", hora:"11 Am", horasCurso:"48", nivel:"A1" })
    const saveAprendizaje1=await aprendizaje1.save()
  
    const aprendizaje2=new Aprendizaje({idIdioma:saveIdioma2._id, idInstructor:SaveInstructor2._id,
    fecha:"11/2/2022", hora:"8 Am", horasCurso:"48", nivel:"A1" })
    const saveAprendizaje2=await aprendizaje2.save()


    const aprendizaje3=new Aprendizaje({idIdioma:saveIdioma3._id, idInstructor:SaveInstructor3._id,
    fecha:"11/5/2022", hora:"10 Am", horasCurso:"48", nivel:"A1" })
    const saveAprendizaje3=await aprendizaje2.save()

    const results=await Aprendizaje.find()



    console.log(`Los elementos disponibles en esta entidad o modelo son:`)
    for(i of results){
    console.log(i)
    }
}



crudAprendizaje()
