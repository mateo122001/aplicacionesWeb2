


recorrerArray(1)


function recorrerArray(opcion){

    switch (opcion){
        case 1: 
        arrayIdiomas(1)   
        break     
        case 2:
        arrayInstructores(1)
        break
         case 3:
        arrayAprendizaje(1)
        break
        default:
        console.log("Opcion invalida")

    }
}


 function arrayIdiomas(tipoDeCiclo){
const idiomas=[
    {
    
        idIdioma:1,
        descripcion:"Ingles B1",
    
},
    {
        idIdioma:2,
        descripcion:"Italiano A1"
    },
    {
        idIdioma:3,
        descripcion:"Portugues A1"
    },
    {
        idIdioma:4,
        descripcion:"Frances A1"
    },
    {
        idIdioma:5,
        descripcion:"Aleman A1"
    }


]


switch(tipoDeCiclo){
    case 1: 
    for(elemento of idiomas){

        console.log(`Id idioma: ${elemento.idIdioma} Descripcion idioma: ${elemento.descripcion}`)
    }
    break     
    case 2:
        for(elemento in idiomas){
            console.log(`Id idioma: ${idiomas[elemento].idIdioma} Descripcion idioma: ${idiomas[elemento].descripcion} `)
        }

    break
     case 3:
 
    idiomas.forEach((element)=>{

    console.log(`Id idioma: ${element.idIdioma} Descripcion idioma: ${element.descripcion} `)
        
    
    })
   
    break
    default:
    console.log("Opcion invalida")
}


    }












 function arrayInstructores(tipoDeCiclo){


const instructores=[
{
    idInstructor:1,
    nombre:"Juan Delgado",
    experiencia:"5 años"
},
{
    idInstructor:2,
    nombre:"Marcos Mera",
    experiencia:"3 años"
},
{
    idInstructor:3, 
    nombre:"Ivan Maldonado",
    experiencia:"3 años"
},
{
    idInstructor:4,
    nombre:"Joselin Cedeño",
    experiencia:"4 años"
},
{
    idInstructor:5,
    nombre:"Maria Romero",
    experiencia:"3 años"
}

]



switch(tipoDeCiclo){
    case 1: 
    for(elemento of instructores){

        console.log(`Id instructor : ${elemento.idInstructor} Nombre instructor: ${elemento.nombre} Experiencia: ${elemento.experiencia} `)
    }
    break     
    case 2:
        for(elemento in instructores){
            console.log(`Id instructor: ${instructores[elemento].idInstructor}Nombre instructor: ${instructores[elemento].nombre} Experiencia:${instructores[elemento].experiencia} `)
        }

    break
     case 3:
 
   instructores.forEach((element)=>{

    console.log(`Id instructor: ${element.idInstructor} Nombre: ${element.nombre}  ${element.experiencia}`)
        
    
    })
   
    break
    default:
    console.log("Opcion invalida")
}
}





    console.log("")













        