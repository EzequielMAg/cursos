/* 
    Las promesas vinieron a reemplazar hasta cierto punto las callbacks, por que son una mejora.
    Pero las funciones asincronas no vienene a reemplazar las promesas, al contrario, trabajan
    en conjunto. 
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

/* 
Para el manejo de errores, aca nos conviene usar un bloque try-catch
Nos damos cuenta que al trabajar con funciones asyncronas, cada peticion la puedo guardar en una variable
Y evitar el uso de varios .then(), lo que algunos llaman la "promise hell" = "El infierno de las promesas" */
 async function funcionAsincronaDeclarada() {
    try{
        console.log("Inicio de Async Function");

     /* Aca con await, le estamos diciendo que espere el resultado, ya que si no lo ponemos, como cuadradoPromise()
        es una FN asincrona, el programa sigue su curso y va a imprimir el objeto, pero con todos los valores
        undefined, ya que no todavia no se retorno la rta con los valores a imprimir
        Pero con el await, la ejecucion se frena ahi, esperando a q se resuelva la promesa, y luego ya tengo el obj */
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);  
        
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`); 
        
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`); 
        
        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }
    catch(error) {
        console.error(error);
    }
}

funcionAsincronaDeclarada();

/* 
    Esta forma de trabajar con async-await, no es que reemplace el uso de las promesas.. como se vio, trabajan en conjunto
    Tambien queda todo mas prolijo, mas facil de leer y nos ahorra el uso de concatenar muchos .then()
*/

//Formato arrow function
const funcionAsincronaExpresada = async () => {
    try{
        console.log("Inicio de Async Function Expresada");

        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);  
        
        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`); 
        
        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`); 
        
        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(11);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }
    catch(error) {
        console.error(error);
    }
}

funcionAsincronaExpresada();