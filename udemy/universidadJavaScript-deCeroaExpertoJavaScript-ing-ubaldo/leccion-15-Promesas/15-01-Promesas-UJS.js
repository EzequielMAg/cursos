/* 
*   VIDEO N° 118: PROMESAS EN JS

    En una promesa vamos a utilizar funciones de tipo callback
*   Una promesa basicamente es codigo que tiene varios estados: 
*   pending (pendiente), 
*   resolved (resulta) o 
*   rejected (rechazada)    

    Entonces vamos a hacer una peticion, para procesar un codigo en caso de que la promesa se haya
    resuelto correctamente, y en caso de que hayamos tenido problemas, se manda a procesar el caso de rejected

*   Tenemos dos caminos, uno en el que la promesa, el codigo esperado, se pudo ejecutar correctamente y otro
*   camino en el cual pudriamos tener un error, y mientras la promesa no haya terminado de ejecutar su codigo, 
*   se encuentra en estado de pendiente. Una vez que termino de ejecutarse la promesa, pasa a resuelto o a rechazado.

*   Para procesar el codigo una vez que se haya resuelto la promesa, usaremos .then()
*   Y para procesar la promesa en caso que tengamos error, usaremos la FN de .catch()
*/

//* Asi creamos una promesa y esta, en su constructor, va a recibir un parametro: una FN CALLBACK, 
//* la cual tiene dos parametros que tambien son, funciones callback! 

//* En criollo, el const de la promesa recibe una funcion, con 2 parametros que son tambien funciones 
let miPromesa = new Promise((resolver, rechazar) => {

    let expresion = true;

    if(expresion) {
        resolver("Resolvio correctamente!");
    } 
    else {
        rechazar("Se produjo un error");
    }
});

//* Podemos pasar las funciones en el mismo .then()
// miPromesa.then(valor => console.log(valor), error => console.log(error));

//* O poner el reject (segundo parametro) a traves del .catch()
//* Creo que por lo general se trabaja asi...
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

// En la llamada de la promesa, dentro del .then(), debemos pasar la funcion de resolver y en el .catch()
// debemos pasar la funcion de error, rechazar en este caso
// Le podemos pasar el nombre de la fn, osea una referencia, o la fn directamente, como funcion normal, anonima o flecha