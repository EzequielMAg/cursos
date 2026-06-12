let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Iron man',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    log: -118.70
  },
  trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, Calñifornia'
  },
  'ultima-pelicula': 'Infinity-War',
}

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);

console.log('Edad:', personaje.edad);
console.log('Edad:', personaje['edad']);

console.log('Coords:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula:', personaje['ultima-pelicula']);


//* Mas detalles

//Supongamos que queremos eliminar una propiedad del objeto literal
personaje.edad = null;
console.log(personaje);

//Esto anterior no fuincion, pero lo siguiente si:
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// Con esta funcion podemos volver todas las propiedad del obj literal par de arrays de 2 elementos
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// Con esta funcion poemos hacer que todas las props se bloqueen para no poder editarlas
Object.freeze( personaje );

personaje.dinero = 1000000000000000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

//Digamos que necesito un listado de las props del objeto
const propiedades = Object.getOwnPropertyNames( personaje );
console.log(propiedades);

const valores = Object.values( personaje );
console.log(valores);

//* BIBLIOGRAFIA:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object