/* 
*   VIDEO N° 112: Clausula throws
*/

"use strict";

try {
    let x = 10;

    throw "Mi error";   //Arrojando una excepcion 
}
catch(error) { 
    console.log(error);
}
finally {
    console.log("Termina la revision de errores");
}

console.log("Continuamos...");


// ---------------------------------------------------
// let resultado = "hola";
let resultado = "";

try {
    if(isNaN(resultado))
        throw "No es un número!";   //Arrojando una excepcion
    else if(resultado === "") 
        throw "Es cadena vacia";
    else if(resultado >= 0)
        throw "Valor positivo";
    else if(resultado < 0)
        throw "Valor negativo";
}
catch(error) { 
    console.log(error);

    //De esta forma podemos dividir la informacion del error
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log("Termina revision de errores");
}

// -------------------
try {
    x = 10;
}
catch(error) { 
    console.log(error);

    //De esta forma podemos dividir la informacion del error
    console.log(error.name);
    console.log(error.message);
}