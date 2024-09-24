// Esta siguiente instruccion es bloqueante. Significa que detiene el flujo normal del programa, en este caso hasta 
// que el usuario oprima el boton 'aceptar'. Lo mismo con las demas 2 instrucciones (prompt y confirm).
alert('Hola mundo!'); 

// Captura el input ingresado por el usuario y lo retornar como un string.
let nombre = prompt("¿Cual es tu nombre?", 'Sin nombre')
console.log(nombre);
console.log('***' + nombre + '***');

// Retorna el valor boolean segun el boton oprimido: Aceptar=true, Cancelar=false.
let result = confirm('¿Estas seguro de borrar esto?');
console.log(result);