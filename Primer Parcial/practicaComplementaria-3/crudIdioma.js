

/*mongodb+srv://mateoparraga17:<password>@cluster0.6minr6o.mongodb.net/test*/

const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";
const Idioma=mongoose.model("Idioma", {description:String})

async function crudIdioma(){

    try{

const establishConnection=await mongoose.connect(urlConnection);



const idioma1=new Idioma({description:"Ingles A1"})

const saveIdioma1=await idioma1.save()

console.log(`Se ingresó correctamente el idioma:  ${saveIdioma1}`)


const results=await Idioma.find()

console.log(`Los elementos disponibles en esta entidad o modelo son: ${results}`)

}catch(error){
console.log(error)

}
}
module.exports={
    Idioma
}
crudIdioma()