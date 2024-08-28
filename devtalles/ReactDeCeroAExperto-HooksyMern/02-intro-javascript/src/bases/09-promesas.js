import { getHeroeById } from './bases/08-imports-exports'

//* PROMESAS
// Verlas como la vida real.. Nosotros hacemos promesas -> Tienen dos resultados:
//  - RESUELTAS
//  - NO RESUELTAS
//  - EN PROCESO

/*  - Las promesas por naturaleza son ASINCRONAS y primero se van a ejecutar todo el codigo que es SINCRONO
      todo lo que es secuencial. Las promesas caen en un lugar especial de la pila de trabajo/tareas de JS
    
    - Las promesas se crean con un argumento que es un callback y este recibe 2 ARGUMENTOS:
        - RESOLVE: este es otro callback que se va a ejecutar si la promesa es exitosa, osea se resuelve
        - REJECTED: se va a ejecutar cando la promesa falla
    */
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // TAREA
        // importen el 
        const p1 = getHeroeById(2);
        resolve(p1)
        //console.log('2 segundos despues');
    }, 2000 );
} );

/* Cuando la promesa se termine/cumpla se va a ejecutar el metodo then()
    - El metodo cath() significa que dio un error o se ejecuta el reject y hay que manejar la excepcion
    - El finally() se va a ejecutar luego de alguno de los dos anterioresm, sea cual fuere el q se ejecute.*/
promesa.then( (heroe) => console.log('heroe', heroe)).catch( (err) => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
        // TAREA
        // importen el 
        const p1 = getHeroeById(id);
        if(p1) {
            resolve(p1)
        } else {
            reject("No se pudo encontrar el heroe")
        }
        //console.log('2 segundos despues');
    }, 2000 );

})};

/* getHeroeByIdAsync(40)
    .then(heroe => console.log('Heroe', heroe ))
    .catch(err => console.warn(err)); */
    
getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);