/* 
*   VIDEO N° 58: Funciones flecha
*/

/* NOTA EXTRA: 
    no podemos llamar a una FN flecha antes de su declaracion, osea que no se aplica el concepto
    de HOISTING en este tipo de funciones
*/
// let res = sumar(1,2);
// console.log(res);

// Las FN's flecha fueron introducidas en EMAScript 6

// Declaracion de la funcion de tipo expresion o funcion anonima
const sumar = function (a, b) {return a+b};
console.log(sumar(2, 5));

const sumarFuncionTipoFlecha = (a, b) => a + b;
console.log(sumarFuncionTipoFlecha(20, 5));


/*  NOTAS:
    - Las ARROW FUNCTION a diferencia de una funcion comun, u anonima, ya no lleva la palabra reservada FUNCTION
      ademas tampoco se usan {} llaves, ni return, y caracteristicamente se usa la flechita =>
    
      - Aunque si la FN lambda, tiene mas de una linea de codigo, entonces ahi si se deben poner las llaves {} y el return
        si es que va a retornar un valor.
*/









