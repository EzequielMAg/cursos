/* 
*   VIDEO N° 48: Arreglos
*/

// Los arreglos son de tipo OBJETOS en JS, y podemos almacenar muchos valores, incluso de distintos tipos


//* DIFERENTES FORMAS DE DECLARAR UN ARREGLO

//Esta forma de declarar un arreglo, se considera sintaxis antigua
let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');

// Forma de declarar un arreglo el dia de hoy. Declaramos con CONST xq por lo gral, no se va a cambiar la referencia del array
// Con referemcia, nos referimos a la direccion de memoria donde se va a almacenar el arreglo, ya que el identificador "autos2"
// va a almacenar esta referencia donde se va a crear. PERO lo que si podemos modificar, es el contenido del arreglo.
const autos2 = ["BMW", "Mercedez Benz", "Volvo"];


//! --------------- TRABAJANDO CON CHAT GPT:  DIFERENTES FORMAS DE DECLARAR UN ARREGLO  ---------------
//* Notación de corchetes (Array Literal):
//esta es la que vimos en clase
let miArray = []; // Array vacío
let numeros = [1, 2, 3, 4, 5]; // Array de números
let frutas = ["manzana", "plátano", "naranja"]; // Array de cadenas

//* El constructor Array():
// Tambien la vimos en clase, pero, segun Ubaldo, es la sintaxis antigua, segun ChatGPT ambas formas de sintaxis estan 
// desde versiones iniciales de JS
let miArray2 = new Array(); // Array vacío
let numeros2 = new Array(1, 2, 3, 4, 5); // Array de números
let frutas2 = new Array("manzana", "plátano", "naranja"); // Array de cadenas

//* Declaración con tamaño fijo:
// La sintaxis del constructor Array se usa menos. Es mas larga respecto a los corchetes. Aunque se usa mas cuando se 
// desea especificar un tamaño inicial para el arreglo. 

// Puedes declarar un array con un tamaño fijo y luego asignar valores a sus elementos individualmente:
let miArray3 = new Array(3); // Crea un array con 3 elementos indefinidos
miArray3[0] = "elemento1";
miArray3[1] = "elemento2";
miArray3[2] = "elemento3";

// ACLARACION: puedes agregar elementos a un arreglo declarado con new Array(n) más allá de su longitud original sin que 
//             se produzca un error. Sin embargo, la longitud del arreglo se actualizará automáticamente para reflejar la 
//             cantidad de elementos que contiene.
miArray3[3] = "elemento4";
console.log(miArray3);
console.log(miArray3.length);

miArray3.push("Elemento 5");
console.log(miArray3);
console.log(miArray3.length);

/* 
! CONCLUSION:
*   No existen tamaños fijos estrictos en cuanto a la longitud de los arreglos. Los arreglos en JavaScript son dinámicos en el
    sentido de que pueden crecer o reducir su longitud de forma flexible según sea necesario. Puedes agregar o eliminar elementos 
    en cualquier momento, y la longitud del arreglo se adapta automáticamente para reflejar la cantidad de elementos que contiene.

*   No hay un límite predeterminado para la longitud de un arreglo, y no es necesario declarar un tamaño máximo al crear un  arreglo 
    en JavaScript. Esto hace que los arreglos en JavaScript sean extremadamente flexibles y versátiles para trabajar 
    con datos de diferentes tamaños sin preocuparte por límites de tamaño específicos.
*/

// A continuacion elimino un elemento, y CONFIRMO que el array se adapta, actualiza su longitud segun la cant de elementos
// y no deja ningun espacio en el medio. Ya que habia eliminado el elemento de la posicion 2 ("elemento 3")
miArray3.splice(2, 1);
console.log(miArray3);
console.log(miArray3.length);

//* ------------  PRACTICA PROPIA: agregando elementos y dejando espacios vacias en el arreglo ------------
miArray3[miArray3.length] = "nuevoElemento"
console.log(miArray3);

miArray3[6] = "nuevoElemento2";
console.log(miArray3);

console.log(miArray3[5]);

miArray3[60] = "hola!";
console.log(miArray3);
// Esto ultimo, es algo peligroso, porque como se ve, podemos dejar el arreglo con muchos espacios vacias, estariamos 
// desperdiciando memoria.