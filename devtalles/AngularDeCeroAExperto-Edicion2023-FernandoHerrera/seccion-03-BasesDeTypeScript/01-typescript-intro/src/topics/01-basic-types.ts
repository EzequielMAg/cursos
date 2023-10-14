
//Cuando creamos variables y las inicializamos, pero no estamos declarando su tipo, TS infiere sobre el.
//Segun el valor inicializado, toma tal tipo de dato para la variable
let name = "Ezequiel";
//let name: string = "Ezequiel";


//Y si lo queremos reasignar, esto no va a ser posible! Nos tira un error, porque ya fue inicializado como un string
//Y debe respetarse ese tipo de dato. Y vamos a tener los errores en tiempo de escritura.
//name = 123;

//Si sabemos que una variable no va a cambiar, usemos una variable const!
const PI = 3.14;


//Parte del objetivo de TS, es que cuando nosotros hacemos el build de produccion, es decir, tomamos nuestros codigo y 
//generamos esos archivos de js, html y css, crea una aplicacion con puro JS, lo cual nos permite a nosotros cambiar a cual 
//version objetivo queremos del ECMAScript, osea si queremos los ultimos estandares o queremos una version anterior mas compatible.
// Y transforma todo el codigo completamente a esa version elegida.


let hpPoints: number = 95;

//Puedo agregar el operaor '|' para declarar que la variable pueda permitir mas de un tipo de dato
let hpPoints2: number | string = 10;
hpPoints2 = "hola mundo!";

//Si va a haber un unico string permitido, tambien podemos hacer:
let hpPoints3:number | "FULL" = 95;
hpPoints3 = "FULL";
//hpPoints3 = "hola mundo!";    //Tira error porque no es que se le definio string y number. Si no un string en especifico.


//* Cuando se declara una variable y se la inicializa al mismo tiempo, no hace falta agregar el tipo de dato
//* porque TS lo infiere, pero es una buena practica. Hace que el codigo sea mas legible.
const isAlive: boolean = true;

console.log({name, hpPoints, hpPoints2, hpPoints3, isAlive});


// Estamos exportando un objeto vacio, le estamos diciendo a VITE que este archivo actual, es un modulo(.......?)
export {};