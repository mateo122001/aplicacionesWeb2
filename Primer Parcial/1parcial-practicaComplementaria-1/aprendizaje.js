

 
 
 function arrayAprendizaje(tipoDeCiclo){


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
    
    
    
    switch(tipoDeCiclo){
        case 1: 
        for(elemento of Aprendizaje){
    
            console.log(`Id aprendizaje : ${elemento.idAprendizaje} Id idioma: ${elemento.idIdioma} Id instructor: ${elemento.idInstructor}
             Fecha: ${elemento.fecha.dia }/${elemento.fecha.mes }/${elemento.fecha.año} Hora: ${elemento.hora} Número de horas: ${elemento.numeroHorasCurso} Nivel: ${elemento.nivel}`)
        }
        break     
        case 2:
            for(elemento in Aprendizaje){
                console.log(`Id aprendizaje: ${Aprendizaje[elemento].idAprendizaje}Id idioma: ${Aprendizaje[elemento].idIdioma} Id instructor:${Aprendizaje[elemento].idInstructor} 
                Fecha: ${Aprendizaje[elemento].fecha} Hora: ${Aprendizaje[elemento].hora} Número de horas: ${Aprendizaje[elemento].numeroHorasCurso} Nivel: ${Aprendizaje[elemento].nivel}`)
            }
    
        break
         case 3:
     
      Aprendizaje.forEach((elemento)=>{
    
        console.log(`Id aprendizaje: ${elemento.idAprendizaje}Id idioma: ${elemento.idIdioma} Id instructor:${elemento.idInstructor} 
                Fecha: ${elemento.fecha.dia} Hora: ${elemento.hora} Número de horas: ${elemento.numeroHorasCurso} Nivel: ${elemento.nivel}`)
            
        
        })
       
        break
        default:
        console.log("Opcion invalida")
    }
    
    }