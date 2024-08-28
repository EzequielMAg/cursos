//* DESESTRUCTURACION DE OBJETOS 
//(tambien llamado asignacion desestructurante)

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Soldado',
};

// Digamos que necesito cada uno de los datos por separado para mostrarlos por consola talvez:
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// Esto anterior es muy tedioso.. Usemos la DESESTRUCTURACION:
const { nombre } = persona;
console.log( "-> " + nombre );

// Con esta forma le podemos cambiar el nombre a la variable
// Busca el identificador del atributo que le pasamos (izq), y asigna el nuevo identificador (der)
const { nombre:nuevoNombre } = persona;
console.log( "-> " + nuevoNombre );

// Capturando todos los atributos en distintas variables
const { nombre:n, edad, clave } = persona;
console.log( n );
console.log( edad );
console.log( clave );

// Notemos que no hace falta poner todo en el mismo orden de como esta estructurado el objeto
const { clave:c2, edad:e2, nombre:n2 } = persona;
console.log("---> ", c2);
console.log(e2);
console.log(n2);

console.log("------------");

// Un uso interesante, es desestructurar un objeto al pasarlo como parametro en una FN
// Podemos extraer unicamente las propiedades que a nosotros nos interesa (ej: nombre, edad)
// En el tercer parametro un ej. de que podemos pasar parametros por default si no viene ningun valor
const retornaPersona = ( { nombre, edad, rango = 'Capitán' } ) => {
    console.log(nombre, edad, rango);
}

retornaPersona( persona );

// Otro ejemplo
const usContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    
    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = usContext( persona );
console.log(avenger);

// TAREA
const { nombreClave, anios } = avenger
console.log( nombreClave, anios );

// Aveces retornamos un objeto que tienen mas objetos dentro
const usContext2 = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.1232 
        }
    }
}

const { nombreClave:codeName, anios:age, latlng} = usContext2( persona )
console.log( codeName, age, latlng );

//  Extrayendo el objeto anidado -> nombreObjeto: { atributte1, ..., atributteN  }
const { nombreClave:codeName2, anios:age2, latlng: {lat, lng}} = usContext2( persona )
console.log( codeName, age);
console.log( lat, lng );

//Aunque tambien se puede hacer en dos pasos (los renombre, xq ya los estoy usando antes a tales identificadores):
const { latlng:latlng2 } = usContext2( persona );
const { lat:lat2, lng:lng2 } = latlng2;
console.log(lat2, lng2);



//* Mas ejemplos en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { a, b, ...rest } = { a: 100, b: 200, c: 30, d: 40 };
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}