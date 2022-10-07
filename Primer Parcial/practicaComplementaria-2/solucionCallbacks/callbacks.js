
const arrays=require("../solucionBasica/arrays")
const Aprendizaje=arrays.arregloAprendizaje
const instructores=arrays.arregloInstructores

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