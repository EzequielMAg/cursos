/* 
    TS trata de inferir varias cosas luego de declarar la siguiente funcion
    Como que: no tiene argumentos y que no retorna nada (:void entre los () y la lalve de apertura)

    :void, significa que implicitamente no hay un void en la funcion, porque en JS implicitamente, 
    cuando una funcion no retornaba nada, siempre hay un return undefined;

    Para observar cada una de estas cosas en las que infiere Ts, dejar el cursos sobre el nombre de la funcion/variable
*/

function addNumbers() {
}

//Cuando no declaramos el tipo de dato en Ts, no puede inferir en ningun tipo de dato y le pone tipo de dato :any, 
//es decir que puede tomar cualquier valor. Siempre tratemos de especificar el tipo de dato, y si no sabemos que tipo
//de dato es, pongamosle :any explicitamente
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


//Arrow function
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(2, 75);
//console.log({ result2: result2 });

//* NO dejarle a Ts que infiere todo, porque podria pasar que nosotros nos equivoquemos en algo, y Ts
//* puede carrear el error a demas lugares del programa

// En la siguiente Fn se tiene un parametro obligatorio de tipo number, el 2° parametro es opcional, osea si queremos no lo pasamos
// y el 3° parametro es opcional tambien y ademas tiene un valor por default+
// Siempre se aconseja seguir ese orden de parametros, primero los obligatios, luego los opcionales y finalmente los que tienen
// un valor por default
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

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