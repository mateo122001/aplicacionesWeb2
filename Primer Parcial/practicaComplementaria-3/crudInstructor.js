

const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";
const Instructor=mongoose.model("Instructor", {nombre:String})


async function crudInstructor(){

    try{

 
const establishConnection=await mongoose.connect(urlConnection)


const instructor1=new Instructor({nombre:"Cristiano Ronaldo"})

const SaveInstructor1=await instructor1.save()

console.log(`Se guardo de manera exitosa el instructor: ${SaveInstructor1}`)

const results=await Instructor.find()

console.log(`Los elementos disponibles en esta entidad o modelo son: ${results}`)

}catch(error)
{
    console.log(error)
}

}
module.exports=Instructor
crudInstructor()

