/* 
*   VIDEO N° 117: FUNCION SETINTERVAL
*/

 // Esta funcion llama la fn callback cada cierto tiempo, varias veces, en vez de una sola vez como setTimeOut
 let reloj = () => {
    let fecha = new Date();

    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}


setInterval(reloj, 1000);