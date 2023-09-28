/* 
*   VIDEO N° 52: Preguntar si es un Array
*/

let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');

// El typeof no nos sirve, porque nos retorna que los arrays son de tipo OBJECT
console.log(typeof autos);

// En su lugar usamos la siguiente funcion
console.log(Array.isArray(autos));

// O tambien podemos usar INSTANCEOF
console.log(autos instanceof Array);
