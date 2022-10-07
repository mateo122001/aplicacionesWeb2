

/*1. Definir dos arreglos (aplicar 2 de las 3 entidades asignadas) que almacenen por lo 
menos 5 objetos. */

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
    


  


/*2. Aplicar relación entre entidades (los ID permitirán conocer cómo se vinculan las 
entidades en su problema).*/


 const Aprendizaje=[
    {
        idAprendizaje:1,
        idIdioma:1,
        idInstructor:2,
        fecha:{dia:27, mes:9, año:2022},
        hora:"10 Am",
        numeroHorasCurso:24,
        nivel: "A1"
    },
    
    
    {
        idAprendizaje:2,
        idIdioma:2,
        idInstructor:1,
        fecha:{dia:28, mes:9, año:2022},
        hora:"11 Am",
        numeroHorasCurso:24,
        nivel: "A1"
    },
    
    {
        idAprendizaje:3,
        idIdioma:4,
        idInstructor:3,
        fecha:{dia:29, mes:9, año:2022},
        hora:"9 Am",
        numeroHorasCurso:24,
        nivel: "A1"
    },
    {
        idAprendizaje:4,
        idIdioma:5,
        idInstructor:5,
        fecha:{dia:25, mes:10, año:2022},
        hora:"9 Am",
        numeroHorasCurso:24,
        nivel: "A1"
    }
    ]


    const arreglos={
        arregloAprendizaje:Aprendizaje,
        arregloInstructores:instructores
    }

module.exports=arreglos


   








 






/* PROMESAS


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
*/







/*CALLBACKS


    function mostrarElemento(idElemento, mostrarEntidad ){

        const encontrado=Aprendizaje.find((elemento)=>{
            return elemento.idAprendizaje==idElemento
        })
        console.log("Elemento del arreglo de objetos transaccional: ")
        console.log(encontrado)
        mostrarEntidad(encontrado)


    }


    function mostrarEntidad(elementoEncontrado){
        const encontrado2=instructores.find((elemento)=>{
            return elemento.idInstructor==elementoEncontrado.idInstructor
        })
        console.log("Datos de la entidad relacionada: ")
        console.log(encontrado2)
    }

    mostrarElemento(2, mostrarEntidad) 

*/