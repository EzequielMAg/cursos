/* 
*   VIDEO N° 111: Manejo de excepciones
    Cuando estamos trabajando siempre existe la posibilidad de que ocurran errores
    En algunos casos vamos a poder recuperarnos de ciertos errores y en algunos casos no
*/

// Lo primero que haremos es usar el modo strict
"use strict";

//Cuando ocurre un error en nuestro programa, las demas lineas ya no se ejecutan
//x = 10;

//De esta forma nos recuperamos del error -> usando try-catch
try {
    //No declaramos la variable a proposito..
    //x = 10;

    //Ahora probamos llamando a una funcion que no fue declarada
    //miFuncion();

    let x = 10;
}
catch(error) {  //El error se agarra en esta variable

    //Nos manda dos cosas, el tipo de error y el mensaje del error
    console.log(error);
}
finally {
    //Este bloque siempre se va a ejecutar, independientemente de lo que haya en el bloque TRY
    //Recordar que este bloque es opcional
    console.log("Termina la revision de errores");
}


// Gracias al bloque try-catch, atrapamos los errores.. Y nuestro programa continua, puediendose ejecutar 
// la siguiente linea
console.log("Continuamos...");