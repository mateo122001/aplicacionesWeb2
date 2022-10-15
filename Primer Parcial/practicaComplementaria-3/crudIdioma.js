/*mongodb+srv://mateoparraga17:<password>@cluster0.6minr6o.mongodb.net/test*/

const mongoose=require("mongoose")

const urlConnection="mongodb+srv://mateoparraga17:gostosaArlene@cluster0.6minr6o.mongodb.net/test";
const Idioma=mongoose.model("Idioma", {description:String})

async function crudIdioma(){

    try{

const establishConnection=await mongoose.connect(urlConnection);


const idioma1=new Idioma({description:"Ingles A1"})
const saveIdioma1=await idioma1.save()

const idioma2=new Idioma({description:"Italiano A1"})
const saveIdioma2=await idioma2.save()


const results=await Idioma.find()


console.log(`Los elementos disponibles en esta entidad o modelo son: `)
for(i in results){
    console.log(results[i])
}

}catch(error){
console.log(`Se produjo un error ${error}`)

}
}

crudIdioma()
