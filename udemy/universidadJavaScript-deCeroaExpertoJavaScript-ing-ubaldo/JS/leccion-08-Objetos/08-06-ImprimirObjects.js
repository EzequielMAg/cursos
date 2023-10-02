/* 
*   VIDEO N° 68: DISTINTAS FORMAS DE IMPRIMIR UN OBJETO
*/

const persona = {
    nombre: 'Ezequiel',
    apellido: "Mamani",
    email: "ezeq@gmail.com",
    edad: 25,
    nombreCompleto: function() {

        return this.nombre + " " + this.apellido;
    }
}

// Ya vimos como imprimir un objeto completo por consola
console.log(persona);
// Esta forma anterior. a través de la extension quokka se imprime perfecto, y en la consola del navegador tambien

// Aunque a veces, en el enavegador, no se puede imprimir bien, por ejemplo:
//alert(persona);
// Esta anterior, en quokka retorna que alert no esta definida
// y en el navegador retorna un pop up , obvio, pero con el siguiente contenido: [Object Object]
// no nos permite ver las propiedades del objeto


// Existen otras formas para imprimir los objetos en un navegador web
//* Concatenar cada valor de cada propiedad :v
console.log(persona.nombre + " " + persona.apellido); //Asi tantos parametros querramos

//* for in (ya la vimos)
for(const nombreAtributo in persona) {
    console.log(persona[nombreAtributo]);
}

//* A través de Object
// Retorna un arreglo, con los valores de todos los atributos del objeto persona
let personaArray = Object.values(persona);
console.log(personaArray);

//* A través de JSON
// Retorna un string en formato JSON (pares clave-valor, todos entre comillas dobles)
// Aunque el objeto literal, ya esta reprentado como pares clave-valor
let personaString = JSON.stringify(persona);
console.log(personaString);
//alert(personaString);

// --------------------------------------------------------------
// Otra forma que se me ocurre
function mostrarObjectoFormatoLista(objeto) {
    //Hago una copia del objeto, para asegurarme de no modificar el original
    let objetoCopia = {...objeto};
    
    //Borro todos los metodos para luego mostrar algo prolijo, sin metodos
    for(const atributo in objeto) {
        if(typeof objeto[atributo] == "function") {
            delete objetoCopia[atributo];
        }
    }

    // Se pasan todos los valores del objeto a un arreglo
    let objetoArray = Object.values(objetoCopia);

    // Lo transformo en un string
    let objetoString = objetoArray.join("\n");
    console.log(objetoString);
    //alert(objetoString);
}

mostrarObjectoFormatoLista(persona);

// -------------------------------------  PROBANDO COSAS  -------------------------------------
/* // Para determinar si un atributo es un metodo
console.log(typeof persona.nombreCompleto == "function");

///Para clonar un objeto. Se copia todo el objeto en una referencia/posicion de memoria distinta
let persona2 = {...persona};

/// Comprobando que realmente tengan direcciones de memoria distintas
console.log(persona);
console.log(persona2);

delete persona2.nombre;
console.log(persona);
console.log(persona2);

/// Eliminando un metodo
delete persona2.nombreCompleto;
console.log(persona2); */