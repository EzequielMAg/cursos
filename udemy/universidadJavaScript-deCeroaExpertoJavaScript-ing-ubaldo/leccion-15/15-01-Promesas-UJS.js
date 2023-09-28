let miPromesa = new Promise((resolver, rechazar) => {

    let expresion = true;

    if(expresion) {
        resolver("Resolvio correctamente!");
    } 
    else {
        rechazar("Se produjo un error");
    }
});

//* Podemos pasar las funciones en el mismo .then()
// miPromesa.then(valor => console.log(valor), error => console.log(error));

//* O poner el reject (segundo parametro) a traves del .catch()
//* Creo que por lo general se trabaja asi...
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));
