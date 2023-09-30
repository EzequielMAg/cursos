/* 
*   VIDEO N° 61: Paso por valor en funciones
*/

/* 
    Se dice que se pasa por valor cuando utilizamos tipos que NO son objetos, sino tipos de datos primitivos,
    como por ej.: string, number, boolean, etc. Este concepto, asi como el paso por referencia que veremos 
    en el proximo video, los vamos a tratar cuando pasamos argumetos a las funciones.
*/

let x = 10; // VALOR PRIMITIVO, ya que no tiene ni propiedades ni metodos

function cambiarValor(a) {
    a = 20;
}

//* PASO POR VALOR. A la FN se le paso una copia del valor, 
//* y la variable 'a' no tiene ninguna relaciohn con la variable 'x'
cambiarValor(x);
console.log(x);

