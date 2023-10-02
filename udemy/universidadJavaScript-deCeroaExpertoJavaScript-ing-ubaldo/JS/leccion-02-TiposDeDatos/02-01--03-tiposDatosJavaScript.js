/*
*   Seccion 3: Tipos de datos en JS (video 10-11-12)
*/

//*   EJEMPLOS DE TIPOS DE DATOS EN JS     
//Tipo de dato String
var nombre = "Ezequiel";
console.log(nombre);
console.log(typeof nombre);


//Tipo de dato number
var numero = 1000;
console.log(numero);
console.log(typeof numero);


//Tipo de dato object
var object = {
    nombre: "Ezequiel", // En JS podemos usar tanto "" (comillas dobles) como '' (comillas simples). Es lo mismo
    apellido: "Mamani",
    telefono: 2254123456,
    edad: 25
}

console.log(object);
console.log(typeof object);


//JS es de tipado dinamico
nombre = 10;
console.log(typeof nombre);

nombre = 10.654;
console.log(typeof nombre);


//Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);


//Tipo de dato function
function miFuncion() {}
console.log(typeof miFuncion);


//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);


//Tipo clase tambien es una function
class Persona{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);


//Tipo undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);



//null = Significa ausencia de valor
var y = null;
console.log(y);
console.log(typeof y); // DICE QUE ES OJECT!! WTF

/* 
    Un resumen con info extra que estuve recopilando:

    TIPOS DE DATOS EN PRIMITIVOS (SON 6)
    1- undefined: Representa una variable que ha sido declarada pero no tiene un valor asignado. 
                  El valor undefined se asigna automáticamente a las variables si no se les da un valor.
    2- string
    3- number
    4- boolean
    5- simbol 
    6- bigint  -> no lo vimos en estos videos

    TIPOS DE DATOS NO PRIMITIVOS U OBJETOS:
    Estos tipos de datos son construidos utilizando los tipos de datos primitivos y proporcionan funcionalidades 
    y métodos adicionales. Algunos ejemplos de tipos de datos no primitivos en JavaScript incluyen
    
    - object:   El tipo de dato base para todos los objetos en JavaScript. Los objetos son colecciones de pares clave-valor 
                y pueden contener cualquier combinación de tipos de datos, incluyendo otros objetos.
    - function
    - null -> es un valor especial que se usa para representar la ausencia de valor, pero no es considerado un tipo de dato 
              por sí mismo en JavaScript.

    - array
    - date
    - RegExp
    - Map y set
    
    GRAFICO: https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01112E_1.png
    FUENTE: chatGpt y https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=788:tipos-de-datos-javascript-tipos-primitivos-y-objeto-significado-de-undefined-null-nan-ejemplos-cu01112e&catid=78&Itemid=206

    ¿Que significa "tipo de dato primitivo"?
    Son valores fundamentales que no son objetos y que representan datos simples y únicos. 
    Son llamados "primitivos" porque no tienen métodos o propiedades adicionales y se almacenan directamente en la memoria.
    La característica clave de los tipos de datos primitivos es que son inmutables.
    Por ej: cuando se reasigna una variable con un nuevo valor, no se está modificando el valor original en memoria, sino que
    se está creando una nueva ubicación en memoria para el nuevo valor y haciendo que la variable apunte a esa nueva ubicación.

*/  