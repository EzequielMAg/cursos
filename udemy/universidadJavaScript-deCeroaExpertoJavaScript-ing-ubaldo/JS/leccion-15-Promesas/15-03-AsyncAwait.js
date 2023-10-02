/* 
!  VIDEO N° 120: Palabra reservada Asyn con promesas en js

    La palabra async nos va a facilitar el uso de promesas, y 
*   al poner la palabra async antes de la definicion de una funcion, significa que esa funcion va a regresar una promesa


!   VIDEO N° 121: Palabra reservada Await con promesas en JS

!   VIDEO N° 122: Promesas con async, await y setTimeOut
*/

// Como se menciono, async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
    return "saludos con promesa y async";   //Es como en el ejemplo de la clase anterior, que se creaba la promesa con new Promise()
                                            //Pero aca, retorna directamente el msje de resolve()
}

//miFuncionConPromesa().then(valor => console.log(valor));


//* -------------------------  VIDEO N° 121: Palabra reservada Await con promesas en JS  -------------------------
//* Lo que hace await es esperar la resolucion de la promesa, o el resultado que devuelve

//Asyn con Await
async function funcionConPromesaYAwait() {
    
    //Creamos una promesa, a la cual solo le pasamos la funcion de resolved.
    let miPromesa = new Promise(resolver => {
        
        resolver("Promesa con await");
    });
    
    // Consumiremos la respuesta de la promesa, usando await. Se usa tal palabra reservada, junto con el nombre de la promesa.
    // Podemos observar que ya no es necesario usar el metodo .then()  //Entonces await manda a llamar a la promesa, y trae lo 
    // que se le pasa por parametro a la funcion callback, de resolver
    console.log(await miPromesa);
}


//funcionConPromesaYAwait();
//* Importante destacar que NO se puede usar un await, sin declarar un async. 
//* Mas especificamente, await solo se puede usar dentro de una funcion declarada con async


//* -------------------------  VIDEO N° 122: Promesas con async, await y setTimeOut  -------------------------
async function funcionConPromesaAwaitTimeout() {

    console.log("inicio funcion");

    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver("Promesa con await y timeOut"), 3000);
    });

    //Procesamos la promesa
    console.log(await miPromesa);
    console.log("fin funcion");
    //La linea anterior no se va a ejecutar, hasta que se reciba la rta de la promesa, ya que await
    //esta esperando la rta de la promesa.. todas las lineas siguientes se van a ejecutar, recien cuando
    //se reciba la rta
}

funcionConPromesaAwaitTimeout();


/*//*   OSERVACION:
            Sabemos que con async decimos que la funcion va a retornar una promesa.. y que la funcion va a ser 
            asincronica, pero en ningun momento nosotros estamos retornando la promesa.. 
            La estamos trabajando internamente, pero es que adentro de la funcion estamos usando 'await', y
            como se menciono anteriormente, no podemos usar 'await' sin declarar que la funcion que la 
            contiene es asincronica
*/
