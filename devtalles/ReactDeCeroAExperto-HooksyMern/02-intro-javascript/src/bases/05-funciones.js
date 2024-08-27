//* Funciones en JS --------------------------------------------------------------------------------------------------
//NOTA: fui agregando mas informacion aparte de la de la misma clase

//probando el concepto de hoisting
console.log(saludar());
//console.log(saludar2()); //Aca crashea porque se esta llamando a la fn antes de su declaracion
//console.log(saludar3());


//* --------------------------  1. Funciones Declaradas (Function Declarations)  --------------------------
/* Características:
    - Se declaran con la palabra clave function.
    - Pueden ser invocadas antes de su declaración debido al hoisting (elevación).*/
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}

console.log(saludar("Ezequiel"));

// Lo siguinte nos imprime la referencia a la FN
console.log(saludar);

// Lo malo de declarar funciones de esta forma es que se puede pisar facilmente
//saludar = 30; // Esto debido al tipado flexible de JS. Ahora seria un numero entero. Tira warning, pero sigue funcionando
console.log(saludar);

//* --------------------------  2. Funciones Expresadas (Function Expressions)  --------------------------
/* Características:
    - Se asignan a una variable o constante.
    - No se pueden invocar antes de su definición porque no están sujetas al hoisting.*/
//UNA MEJOR FORMA DE DECLARAR UNA FUNCION, y asi garantizar que no se pise la FN
const saludar2 = function(nombre) {
    return `Hola, ${ nombre }`;
};

//saludar2 = 20; //ESTO NOS HACE CRASHEAR EL PROGRAMA... Ya que no podemos asignar un nuevo valor a una constante.

//* --------------------------  3. Funciones Flecha/lambda (Arrow Functions)  --------------------------
/* Características:
    - Introducidas en ES6.
    - Tienen una sintaxis más concisa.
    - No tienen su propio this, arguments, super, o new.target.
    - No se pueden utilizar como funciones constructoras. 
    - Tampoco se las pueden invocar antes de su definición porque no están sujetas al hoisting.*/
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
};

// Si el cuerpo de la funcion solo tiene un return, se puede simplificar de la siguiente manera:
const saludar4 = nombre => `Hola, ${ nombre }`;

// Si la fn no tienen ningun argumento:
const saludar5 = () => `Hola mundo!`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4('Ezequiel'));
console.log(saludar5());

// Retornando un objeto con un arrow function..
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'ezequiel-dev'
    }
};

// Si queremos simplificarla, vamos a tener un probema porque el compilador no va a interpretar si es el cuerpo de la fn 
// o si estamos retornando un objeto.. Entonces para eso elvolvemos el retorno con parentesis ()
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'ezequiel-dev'
});

console.log(getUser());
console.log(getUser2());

// TAREA:
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getUsurioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const getUsurioActivo2 = (nombre) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsurioActivo2('Ezequiel');
console.log( usuarioActivo );


// ESTUDIANDO UN POCO MAS POR FUERA DE CLASE:
//* --------------------------  4. Funciones Anónimas  --------------------------
/* Características:
    - No tienen un nombre propio.
    - A menudo se usan como callbacks o en función expresiones.
    
    Diferencia Clave con las funciones expresadas:
    - Las funciones expresadas pueden ser nombradas o anónimas. Cuando una función expresada no tiene nombre, 
      se llama "función anónima".
    - Las funciones anónimas son simplemente funciones sin nombre.

    En resumen, una función anónima es un tipo de función expresada, pero no todas las funciones expresadas son anónimas.*/
const nombreFuncion = function() {
  // cuerpo de la función
};

//* --------------  5. Funciones Autoejecutables (IIFE - Immediately Invoked Function Expressions)  --------------
/* Características:
    - Se ejecutan inmediatamente después de su definición.
    - A menudo se usan para crear un ámbito local y evitar la contaminación del ámbito global. */
(function() {
  // cuerpo de la función
})();

//* --------------------------  6. Funciones Generadoras (Generator Functions)  --------------------------
/* Características:
    - Introducidas en ES6.
    - Utilizan la palabra clave function*.
    - Pueden pausar y reanudar su ejecución mediante yield.
    - Devuelven un objeto Iterator.*/
function* nombreFuncion2() {
  //yield valor;
}

//* --------------------------  7. Funciones Constructoras  --------------------------
/* Características:
    - Se utilizan para crear objetos (clases) en JavaScript.
    - Se invocan con la palabra clave new.*/
function NombreClase(parametros) {
  // cuerpo de la función
  //this.propiedad = valor;
}

//* --------------------------  8. Funciones de Orden Superior (Higher-Order Functions)  --------------------------
/*Características:
Son funciones que pueden tomar otras funciones como argumentos o devolverlas como resultados.
Ejemplos comunes incluyen map, filter, y reduce.*/

//* --------------------------  9. Funciones Asíncronas (Async Functions)  --------------------------
/* Características:
    - Introducidas en ES8.
    - Permiten manejar operaciones asíncronas de manera más legible.
    - Usan las palabras clave async y await.*/
async function nombreFuncion3() {
  //const resultado = await promesa;
}