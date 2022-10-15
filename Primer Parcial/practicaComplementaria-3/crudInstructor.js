
const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";
const Instructor=mongoose.model("Instructor", {nombre:String})


async function crudInstructor(){

    try{

 
const establishConnection=await mongoose.connect(urlConnection)


const instructor1=new Instructor({nombre:"Juan Delgado", experiencia:"5 años"})
const SaveInstructor1=await instructor1.save()

const instructor2=new Instructor({nombre:"Marcos Mera", experiencia:"3 años"})
const SaveInstructor2=await instructor2.save()

const instructor3=new Instructor({nombre:"Ivan Maldonado", experiencia:"3 años"})
const SaveInstructor3=await instructor3.save()

const instructor4=new Instructor({nombre:"Joselin Cedeño", experiencia:"4 años"})
const SaveInstructor4=await instructor4.save()

const instructor5=new Instructor({nombre:"Maria Romero", experiencia:"3 años"})
const SaveInstructor5=await instructor5.save()


const results=await Instructor.find()


console.log(`Los elementos disponibles en esta entidad o modelo son: `)

results.forEach((elemento)=>{
    console.log(elemento)
})

}catch(error)
{
    console.log(error)
}

}

crudInstructor()

