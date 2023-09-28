let resultado = sumarTodo(8, 5, 4, 5, 7, 5, 25, 4);

function sumarTodo() {
    let resultado = 0;

    for(let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }

    return resultado;
}

console.log(resultado);

/* OBSERVACION:
    La FN no tiene ningun PARAMETRO definido, pero igualmente le pasamos varios parametros, y podemos acceder a ellos
    gracias a que las funciones en JS se comportan como un OBJETO y tienen atributos y metodos, y uno de estos es el metodo
    arguments, el cual nos retornaba un arreglo con todos los argumentos que se le pasaban a la FN 
*/