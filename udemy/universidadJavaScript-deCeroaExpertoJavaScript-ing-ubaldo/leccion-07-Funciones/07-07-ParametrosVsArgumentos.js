/* 
*   VIDEO N° 59: Parametros y argumetnos en funciones
*/

/* 
    En una funcion, las variables que va a recibir una funcion, se denominan PARAMETROS.
    Estan explicitas en la declaracion/firma de la funcion.

    En cambio los ARGUMENTOS son los valores que finalmente pasamos a nuestra funcion,
    cuando realizamos la LLAMADA DE LA FUNCION.
*/

let sumar = function (a, b) { //PARAMETROS
    console.log(arguments); // Imprinme un arreglo con todos los argumentos de la FN
    console.log(arguments[0]);
    console.log(arguments[1]);
    
    return a + b;
};

/* let resultado = sumar(7, 10);
console.log(resultado); */

// En JS no es necesario pasarle todos los valores de los argumetos a una FN
// Luego la variable "b" queda con el valor por default de -> undefined
/* let resultado2 = sumar(12);
console.log(resultado2); */

// Incluso podemos pasarle ningun argumento
// Luego ambos valores quedan como undefined, y la FN retorna un NaN, asi como en la anterior
// Ya que no puede resolver una operacion con un undefined
let resultado3 = sumar();
console.log(resultado3);

// Si no queremos pasar algun argmentos, podemos inicializar los valores de los parametros
// los argumentos siguen siendo undefined, pero los parametros tienen un valor inicializado en cero,
// por lo que la FN trabaja con tales numeros, y retorna un resultado = 0, y no un NaN como antes.
let sumar2 = function(a = 0, b = 0) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    /* return a + b; */
    return a + b + arguments[2];    // LOQUISIMO ESTO!
}

/* let resultado4 = sumar2();
console.log(resultado4); */

// Tambien podemos pasarle mas argumentos que parametros definidos en la FN
// Y en la FN podemos acceder a el a travez de arguments[i] y en i iria el indicie segun la pos del argumento pasado
// y podemos trabajar con el :v PERO debe ser una muy mala practica
// Es logico que a este argumento extra, en la fn, no podemos acceder a el a traves del nombre de un parametro,
// xq no lo definimos, no se definio ninguna variable que reciba el valor
let resultado = sumar2(10, 20, 30);
console.log(resultado);


//! EN BREVE: aprendimos q la cant de argumentos pasados a la FN. no necesariamente debe coincideir con la cant de parametros def