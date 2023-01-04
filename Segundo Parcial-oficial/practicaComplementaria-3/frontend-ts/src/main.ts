import './style.css'
import axios from "axios";
import {IResAprendizaje, Aprendizaje} from "./interfaces/IAprendizaje";


const httpAxios=axios.create({
  baseURL:"http://localhost:2000/api/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
/*
const etiqueta=document.createElement("label")
etiqueta.textContent="identificador"
const input=document.createElement("input")
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta)
app.appendChild(input)
*/
//<label for="fecha">Fecha </label> <input id="fecha"/>
//<label for="id">Id aprendizaje</label>  <input id="id" />
app.innerHTML+=`
<div class="contenedor">
<label for="id">Id aprendizaje</label>  <input id="id" />
<label for="nombre">Nombre aprendizaje</label>  <input id="nombre" />
<label for="idIdioma">Id idioma</label>  <input id="idIdioma" />
<label for="idInstructor"> Id instructor</label> <input id="idInstructor">

<label for="hora">Hora</label> <input id="hora"/>

<label for="horasCurso">Horas del curso</label> <input id="horasCurso"/>
<label for="nivel">Nivel </label> <input id="nivel"/>


<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>
</div>
<div id="cuerpo"/>
`
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const nombre=document.querySelector<HTMLInputElement>("#nombre")!
const id=document.querySelector<HTMLInputElement>("#id")!
const idIdioma=document.querySelector<HTMLInputElement>("#idIdioma")!
const idInstructor=document.querySelector<HTMLInputElement>("#idInstructor")!
//const fecha=document.querySelector<HTMLInputElement>("#fecha")!
const hora=document.querySelector<HTMLInputElement>("#hora")!
const horasCurso=document.querySelector<HTMLInputElement>("#horasCurso")!
const nivel=document.querySelector<HTMLInputElement>("#nivel")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
nuevo.addEventListener("click", ()=>{
  nombre.value=""
  id.value=""
  idIdioma.value=""
  idInstructor.value=""
 // fecha.value=""
  hora.value=""
  horasCurso.value=""
  nivel.value=""
})


consultar.addEventListener("click", async()=>{
  const respAprendizajes:IResAprendizaje=await (await httpAxios.get<IResAprendizaje>("aprendizaje")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {aprendizajes}=respAprendizajes;
  console.log(respAprendizajes)

  for (const aprendizaje of aprendizajes)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${aprendizaje._id}">${aprendizaje.nombre}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${aprendizaje._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;
        const aprendizaje:Aprendizaje=await (await httpAxios.get<Aprendizaje>(`aprendizaje/${idx}`)).data
        nombre.value=aprendizaje.nombre.toString()
        idIdioma.value=aprendizaje.id_idioma.toString()
        idInstructor.value=aprendizaje.id_instructor.toString()
       // fecha.value=aprendizaje.fecha!.toString()
        hora.value=aprendizaje.hora.toString()
        horasCurso.value=aprendizaje.horas_curso.toString()
        nivel.value=aprendizaje.nivel.toString()
        id.value=aprendizaje._id!.toString()
      })
    })
  })

    grabar.addEventListener('click',async ()=>{
      const data:Aprendizaje= {
        nombre:nombre.value.toString(),
        id_idioma:idIdioma.value.toString(),
        id_instructor: idInstructor.value.toString(),
        hora:hora.value.toString(),
        horas_curso:horasCurso.value.toString(),
        nivel:nivel.value.toString()
    
      }
  
    
      if (id.value.trim().length>0 )
      {
        //        
        const resp: Aprendizaje = await (await httpAxios.put<Aprendizaje>(`aprendizaje/${id.value}`, data)).data
       // {acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1} esto regresa
        
        console.log(`El aprendizaje fue modificado con éxito`);
        
        return;
      }
      try {
        const resp: Aprendizaje =  await (await httpAxios.post<Aprendizaje>(`aprendizaje`, data)).data
       
        console.log(`El aprendizaje ${resp.nombre} fue grabado con éxito`);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
          
        }
        
      }
    



    })

