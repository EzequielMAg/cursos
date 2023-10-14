/* 
    TS trata de inferir varias cosas luego de declarar la siguiente funcion addNumbers()
    Como: que no tiene parametros y que no retorna nada (:void entre los () y la llave de apertura)

    Tecnicamente, en JS, toda funcion que no retorna nada, tiene implicitamente un "return undefined".
    Y no es lo mismo retornar void que undefined. Si vemos que retorna void, en Ts, es porque implicitamente
    no retorna undefined

    Para observar cada una de estas cosas en las que infiere Ts, dejar el cursos sobre el nombre de la funcion/variable
*/

function addNumbers() {
}

// Cuando no declaramos el tipo de dato en Ts, Ts no puede inferir en ningun tipo de dato y le pone tipo de dato :any, 
// es decir que puede tomar cualquier valor. 
//* Siempre tratemos de especificar el tipo de dato, y si no sabemos que tipo de dato es, pongamosle :any explicitamente
/* function addNumbers2(a, b) {
} */

//Ahora que definimos los tipos de datos de los parametros, es OBLIGATORIO que se pase tal tipo
//Si no se pasa, Ts lo va a detectar y nos va a tirar un error, asi tambien cuando se pasan menos parametros o mas
function addNumbers3(a: number, b: number): number {
    return a + b;
}

// addNumbers3(3, 1, 1);
// addNumbers3(3);
// addNumbers3(3, "6");

const result: number = addNumbers3(5, 2);


//Podemos imprimir de bonita el result como un objeto, con el nombre de su variable:
//console.log({ result: result });


//* Arrow function
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(2, 75);
//console.log({ result2: result2 });

//* NO dejarle a Ts que infiere todo, porque podria pasar que nosotros nos equivoquemos en algo, y Ts
//* puede carrear el error a demas lugares del programa

// En la siguiente Fn se tiene un parametro obligatorio de tipo number, el 2° parametro es opcional, osea si queremos no lo pasamos
// y el 3° parametro es opcional tambien y ademas tiene un valor por default
//* Siempre se aconseja seguir ese orden de parametros, primero los obligatorios, luego los opcionales y finalmente los que tienen
//* un valor por default
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// Ts a diferencia de Js, te obliga a pasar la cantidad de parametros definimos en la firma de la funcion
// Pero en la fn anterior se esta declarando que los ultimos 2 parametros son opcionales. El ultimo parametro no se lo declara opcional, pero queda opcional
// por inferencia de Ts. Ya que al parecer, todo atributo despues de uno opcional, tambien va a ser opcional. Y ahora que lo pienso tiene sentido:
// porque si decidis no poner el segundo parametro, como le explicas que le estas pasando el 3° y no el 2° argumento? Entonces, Ts como que te dice
// - Si no vas a poner el opcional.. ya esta, no pongas ninguno mas.. Por eso la recomendacion de la linea 51 y 52.
const multiplyResult = multiply(5);
//console.log(multiplyResult);


//! -----------------------------------  FUNCIONES CON OBJETOS COMO ARGUMENTOS  -----------------------------------
interface Character {
    name: string,
    hp: number,
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

    if(character.hp > 100) {
        character.hp = 100;
    }
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${ this.hp }`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);
healCharacter(strider, 5);
healCharacter(strider, 15);
strider.showHp();



// Objeto literal vacio. Esto es algo que no tenemos que hacer en angular. Basicamente se va a resolver cuando nuestra
// funcion o nuestros archivos exporten algo
export { }