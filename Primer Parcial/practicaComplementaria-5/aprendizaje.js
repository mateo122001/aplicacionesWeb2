

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let Aprendizaje = [];


app.get('/', (req,res)=>{
    res.status(200).send({
        Aprendizaje,
        message:"Método get exitoso"
    }
    )
})
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
 
    let result = Aprendizaje.filter(p => p.identification === identification);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
  
 Aprendizaje.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {identification, idIdioma, idInstructor,fecha } = req.body;
    
 
    
    let aprendizaje =  Aprendizaje.filter(p=> p.identification === identification)[0] || {}
    
    aprendizaje.idIdioma=idIdioma
    aprendizaje.idInstructor = idInstructor;
    aprendizaje.fecha=fecha;
    aprendizaje.hora=hora;
    aprendizaje.numeroHorasCurso=24;
    aprendizaje.nivel=nivel;


    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: Aprendizaje
        }
    )

})
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    Aprendizaje = Aprendizaje.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el tipo de aprendizaje con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})
