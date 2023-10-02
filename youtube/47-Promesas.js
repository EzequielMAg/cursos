/* 
    Las promesas van a trabajar con dos recursos principales -> el resolved y el reject

    Si la promesa se cumple,  es decir, si accedemos al recurso pensando que estamos haciendo una peticion a una API, o
    si se realiza el proceso que estamos pretendiendo, entonces la promesa se cumple y se ejecutaria el resolved.
    Si la promesa por alguna razon falla, va a ejecutar el segundo metodo, que es el reject.
*/

function cuadradoPromise(value) {
    if(typeof value !== "number")
        return Promise.reject(`Error, el valor "${value}" ingresado no es un numero!`);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

// Podemos tener tantos then() como queramos, y al final de todos estos, tendremos un catch(), 
// metodo que va a atajar el error. Sin importar en cual de los then() tengamos el error.
cuadradoPromise(0)
    //.then(obj => console.log(obj))
    .then(obj => {
        console.log("Inicio promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("3");
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch(err => console.error(err));