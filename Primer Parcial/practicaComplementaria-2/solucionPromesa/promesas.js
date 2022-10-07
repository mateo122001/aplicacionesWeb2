
const arrays=require("../solucionBasica/arrays")
const Aprendizaje=arrays.arregloAprendizaje
const instructores=arrays.arregloInstructores




function mostrarElemento(idElemento){
    return new Promise((resolved, reject)=>{
        const encontrado=Aprendizaje.find((elemento)=>{
        return elemento.idAprendizaje==idElemento
         
        })

        resolved(encontrado)
    })
}


function mostrarEntidad(elementoEncontrado){
    return new Promise((resolved, reject)=>{
     const encontrado2=instructores.find((elemento)=>{
        return elemento.idInstructor==elementoEncontrado.idInstructor
     })

     resolved(encontrado2)
    })
}



mostrarElemento(1).then((resp)=>{
    console.log("Elemento del arreglo de objetos transaccional: ")
    console.log(resp)
    return mostrarEntidad(resp)

}).then((resp)=>{
    console.log("Datos de la entidad relacionada: ")
    console.log(resp)
})







