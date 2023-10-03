/* 
*  VIDEO N° 241: Instalacion de TS

*  VIDEO N° 242: Definicion de variables con TS
*/

// De la siguiente forma definimos el tipo de la variable
// Aunque esto no es necesario, ya que en TS existe el concepto de "inferencia de tipos"
// let saludo:string = "Hola mundo desde TypeScript";
let saludo = "Hola mundo desde TypeScript";
console.log(typeof saludo);

function saludar() {
   console.log(saludo);
}

saludar();

// En TS NO existe el tipado dinamico como en JS, asi que una vez inicializada la variable, 
// no puede cambiar su tipo de dato. Por esto nos damos cuenta que el tipado de TS es mas riguroso
//Si fue inicializado como string, va a seguir siendo un string.
//saludo = 10;

//Pero si podemos hacer lo siguiente. Ya que sigue siendo una cadena.
saludo = "adios";
saludar();


let numero:number = 10; //* Igualmente se puede omitir el tipo number (:number)
console.log(numero);

// numero = "Hola";  //Nos tira un error de que no se puede cambiar, ya que debe ser tipo number

//* Si no inicializamos la variable y la usamos luego, nos tira error, y nos obliga a inicialiarla.
let x:number; //Aunque hagamos esto.
// let x = 10;

x = 10;  //Esta linea por si sola, no se puede, te arroja error. Pero si se puede si se declaro antes como en la linea 34
         //Osea que si la declaras, podes inicializarle en cualq momento despues, MIENTRAS aun no se use la variable.
console.log(x);


let cualquiera:any;
cualquiera = 10;

cualquiera = "hola"; //Con :any, ahi la variable, si puede tomar cualquier tipo de dato cuando se asigna un nuevo dato.. 
// Pero esto es en TypeScript esta desaconsejado, puede traer problemas, hay que usarlo con cuidado.

// Tambien podemos usar constantes como en JS
const PI = 3.14;
//PI = 3.16;   //Logicamente esto no se puede hacer...
const NUMERO_E = 2.718; 