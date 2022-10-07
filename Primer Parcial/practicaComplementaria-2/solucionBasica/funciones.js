

const arreglos=require("./arrays")

const Aprendizaje=arreglos.arregloAprendizaje

const instructores=arreglos.arregloInstructores

/*3. Con una función busque y muestre uno de todos los elementos del arreglo de objetos 
transaccional y los datos de su entidad relacionada.*/

function mostrarElemento(idElemento){
    const encontrado=Aprendizaje.find((elemento)=>{
        return elemento.idAprendizaje==idElemento
    })
    const encontrado2=instructores.find((elemento)=>{
        return elemento.idInstructor==encontrado.idInstructor
    })
    
  
    console.log("Elemento del arreglo de objetos transaccional: ")
    console.log(encontrado)

    console.log("Datos de la entidad relacionada: ")
    console.log(encontrado2)



}
mostrarElemento(2) 