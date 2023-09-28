/* 
*   VIDEO N° 47: Etiquetas (Labels)
*/

// Las etiquetas se usan tanto con BREAK como con CONTINUE.
// Sirven para ir a una parte del programa que deseemos
// Si usamos las anteriores palabras clave sin etiquetas, por default trabaja con el bucle mas proximo
// Pero con las etiquetas lo podemos redirigir a otra parte..
// En la siguiente linea se pone la etiqueta inicio: junto con continue, 
inicio:
for(let contador = 0; contador < 10; contador++) {
    if(contador % 2 !== 0) {
        continue inicio;   //Significa: ir a la siguiente iteracion del ciclo que esta despues de la etiqueta
    }

    console.log(contador);
}

inicio2:
for(let contador = 0; contador < 10; contador++) {
    if(contador % 2 !== 0) {
        break inicio2;   //Significa: romper con el ciclo que esta despues de la etiqueta
    }

    console.log(contador);
}
/* 
* ESTA PROGRAMACION NO ESTA RECOMENDADA, se conoce como PROGRAMACION GO-TO y es considerada una MALA PRACTICA
*/