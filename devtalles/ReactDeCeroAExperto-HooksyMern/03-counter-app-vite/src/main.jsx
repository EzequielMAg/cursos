// Los siguientes dos elementos son los que necesito para poder renderizar mi aplicacion
import React from 'react'   // para escribir rápido la importacion el snippet detecta cuando escribimos: IMR
import ReactDOM from 'react-dom/client'
//import { App } from './HelloWordApp'  // Para una importacion de un elemento especifico uso las llaves { }
import HelloWord, { HelloWordApp as Asd } from './PracticeComponents/01-HelloWordApp'        // Esto para una esportacion por default
import FirstApp, { Presentandome } from './PracticeComponents/02-FirstApp'
import { PracticeFragment } from './PracticeComponents/03-PracticeFragment'
import { PracticeFragment2 } from './PracticeComponents/04-PracticeFragment2'
import { ShowVariables } from './PracticeComponents/05-ShowVariables'
import './styles.css';
import { CounterApp3 } from './CounterApp3'


/* Usualmente todo en react empieza con un componente, o un functional component y este es el punto 
   de entrada de nuestra aplicacion. Tales componentes se llaman asi por que estan basados en funciones o 
   en una funcion. Los componenes tambien se trabajaban con clases (class components) pero ya no se acostumbra
   trabajar los componentes de esta forma si no mediante funciones.*/


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWord/>
        <hr></hr>
        <Asd/>
        <hr></hr>

        <FirstApp/>
        <hr></hr>
        <Presentandome/>

        <PracticeFragment/>

        <PracticeFragment2/>

        <ShowVariables title="Hola soy Goku" subtitle={123} /> */}

        {/* <CounterApp value = { 7 }/> */}
        {/* <CounterApp2 value = { 77 }/> */}
        <CounterApp3 value = { 123 }/>

    </React.StrictMode>
)

