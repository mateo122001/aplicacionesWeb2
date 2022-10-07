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
        },
         {
            idAprendizaje:5,
            idIdioma:3,
            idInstructor:5,
            fecha:{dia:15, mes:10, año:2022},
            hora:"9 Am",
            numeroHorasCurso:24,
            nivel: "A1"
        }
        ]


        module.exports={
            idiomas,
            instructores,
            Aprendizaje
        }
