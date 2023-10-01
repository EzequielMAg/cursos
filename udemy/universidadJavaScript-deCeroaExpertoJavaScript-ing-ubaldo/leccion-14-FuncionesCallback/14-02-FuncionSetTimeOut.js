/* 
!   VIDEO N° 116: FUNCION SETTIOMEOUT

    Pareciera que no hiciera falta usar las callback, porq podriamos llamar la fb dentro de la FN principal
*   de manera normal.. El objetivo de las funciones de tipo callback es para que puedanm ser utilizadas para 
*   procesos asincronos. 
    (igualmente, si le pasas por arg una fn, podes pasarle cualquier fn.. Si solo la llamamos
    solo podriamos llamar una especifica, y luego tendriamos que hacer otra FN para llamar a otra distinta :v)

*   PROCESO SINCRONOS: significa que se ejecutan uno tras otro, una linea a la vez -> secuencialmente
*   Aunque cuando llamamos a la FN callback, se crea un nuevo flujo de ejecucion, y el resto del codigo
*   que haya en la FN principal, va a seguir ejecutandose, pudiendo ejecutar varios procesos por separado,
*/

// Llamadas asincronas con uyso de setTimeOut
function miFuncionCallback() {
    console.log("Saludo asincrono despues de 3 segundos...");
}

console.log("inicio");

// Recibe como 1° parametro una FN de tipo Callback, y como 2° param el tiempo q queremos que transcurra para
// que se ejecute la FN callback, establecido en milisegundos
setTimeout(miFuncionCallback, 3000); //Despues de 3 segundos

console.log("Hola.....");


//Podemos pasarle toda la funcion directamente como argumento
setTimeout(function () {console.log("Saludo asincrono 2");}, 2000);

//Incluso podemos simplificarlo mas, pasandole una funcion flecha
setTimeout(() => console.log("Saludo asincrono 3"), 2500);









