const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


let idiomas = [];


app.get('/', (req,res)=>{
    return res.status(200).send({
        idiomas, 
        message:"metodo get exitoso"
    }
    )
})
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
    // req.params.identification
    let result = idiomas.filter(p => p.identification === identification);
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
   
    idiomas.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body,
        message:"método post exitoso"
        
    })
})
app.put('/', (req,res)=>{
    const {identification, description} = req.body;
    

    
    let idioma =  idiomas.filter(p=> p.identification === identification)[0] || {}
    
  

    idioma.description = description;
   

    res.status(200).send(
        {
            message:"dato modificado correctamente (put)",
            response: idioma,
          
        }
    )

})



app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    idiomas = idiomas.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el idioma con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})