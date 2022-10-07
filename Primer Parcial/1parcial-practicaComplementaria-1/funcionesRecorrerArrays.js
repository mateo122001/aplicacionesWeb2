



const arrays=require("./arrays")
const idiomas=arrays.idiomas
const instructores=arrays.instructores
const Aprendizaje=arrays.Aprendizaje



recorrerArray(2)

function recorrerArray(opcion){

    switch (opcion){
        case 1: 
        recorrerIdiomas()
        break     
        case 2:
        recorrerInstructores()
        break
        case 3:
        recorrerAprendizaje()
        break
        default:
        console.log("Opcion invalida")

    }
}




function recorrerIdiomas(){
    idiomas.forEach((element)=>{

        console.log(`Id idioma: ${element.idIdioma} Descripcion idioma: ${element.descripcion} `)
            
        
        })
}



function  recorrerInstructores(){

    for(elemento of instructores){

        console.log(`Id instructor : ${elemento.idInstructor} Nombre instructor: ${elemento.nombre} Experiencia: ${elemento.experiencia} `)
    }

}



function recorrerAprendizaje(){

    for(elemento in Aprendizaje){
        console.log(`Id aprendizaje: ${Aprendizaje[elemento].idAprendizaje}Id idioma: ${Aprendizaje[elemento].idIdioma} Id instructor:${Aprendizaje[elemento].idInstructor} 
        Fecha: ${Aprendizaje[elemento].fecha} Hora: ${Aprendizaje[elemento].hora} Número de horas: ${Aprendizaje[elemento].numeroHorasCurso} Nivel: ${Aprendizaje[elemento].nivel}`)
    }

}











        
