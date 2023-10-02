/* 
    CALLBACK = llamada de vuelta. Es una funcion que se va a ejecutar despues de que otra lo haga.

    De hecho, es el mecanismo por excelencia que JS tiene para invocar algunas de sus funciones.

    Las funciones callback nos sirven para controlar la sincronia. Pero cuando tenemos que concatenar
    una callback tras otra para hacer tareas en las que unas depeden de otras, se hace una cadena largaa
    de callbacks, tendremos una callback hell.. Y si queremos hacer un manejo de errores tenemos que hacer 
    el manejo del error por cada iteracion de callback... 
*/

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

//CALLBACK hell
cuadradoCallback(0, (value, result) => {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);

    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});