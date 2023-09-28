/* 
*   VIDEO N° 46: Palabra clave CONTINUE
*/

for(let contador = 0; contador < 10; contador++) {
    if(contador % 2 !== 0) {
        continue;   //Significa: ir a la siguiente iteracion
    }

    console.log(contador);
}

/* NOTA: 
    En el video anterior se trabajo con la palabra clave BREAK dentro de un ciclo for tambien,
    y servia para romper con el bucle, y salir de el. Sirve para buscar algo en especifico y terminar la iteracion.
*/