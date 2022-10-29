const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let instructores = [];


app.get('/', (req,res)=>{
    res.status(200).send({
        instructores,
        message:"Método get exitoso"
    }
    )
})
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
 
    let result = instructores.filter(p => p.identification === identification);
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
  
 instructores.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {identification, name, experience} = req.body;
    
 
    
    let instructor =  instructores.filter(p=> p.identification === identification)[0] || {}
    

    instructor.name = name;
    instructor.experience=experience

    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: instructor
        }
    )

})
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    instructores = instructores.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el instructor con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})
