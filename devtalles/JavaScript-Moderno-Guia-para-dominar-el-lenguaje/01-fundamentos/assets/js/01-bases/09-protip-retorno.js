//* Notar que si el nombre de la propiedad es igual al nombre del parametro se puede omitir:
function crearPersona( nombre, apellido ) {
  return {
    /* nombre: nombre,
    apelido: apellido */
    nombre,
    apellido
  }
}

const persona = crearPersona('Ezequiel', 'Mamani');
console.log( persona );

//* Envolver con parentesis el retorno implicito para indicarle a JS que no es el cuerpo de mi FN sino mi retorno
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

persona2 = crearPersona2('Ezequiel', 'Mamani Aguilar');
console.log(persona2);


//* Otro PRO TIP:
function imprimeArgumentos() {
  console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Fernando', 'Hola');

// Ahora FN flecha:
//SI lo dejamos asi como esta, no va a funcionar, asi q
/* imprimeArgumentos2 = () => {
  console.log( arguments );
} */

// ... esos 3 puntitos hacen referencia a un parametro REST, el cual dice q todos los args enviados q cree un arreglo con ellos
// Consideracion con este parametro rest: despues del parametro no puede ir ningun otr oparametro, no lo tomara en cuenta
imprimeArgumentos2 = (edad, ...arguments) => {
  console.log({ edad, arguments });
}

imprimeArgumentos2(10, false, 'Flor', 'Adri');

//* PRO TIP: para sacar info necesaria de un objeto
const {apellido: nuevoApellido} = crearPersona2('Ezequiel', 'Mamani Aguilar');
console.log(nuevoApellido);

//* OTRO PRO TIP: desestructuracion de argumentos
let tony = {
  nombre: 'Tony Stark',
  codeName: 'Iron man',
  vivo: false,
  /* edad: 40, */
  trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
}

/* const imprimePropiedades = ( personaje ) => {
  console.log('nombre:', personaje.nombre);
  console.log('codeName:', personaje.codeName);
  console.log('vivo:', personaje.vivo);
  console.log('edad:', personaje.edad);
  console.log('trajes:', personaje.trajes);
} */

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
}

imprimePropiedades(tony);