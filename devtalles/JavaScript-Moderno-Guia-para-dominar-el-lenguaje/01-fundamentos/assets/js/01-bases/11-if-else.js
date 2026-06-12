let a = 15;

if (a >= 10) {
  console.log('a es mayor o igual a 10');
} else {
  console.log('a es menor a 10');
}

console.log('Fin del programa!');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes......

console.log({ hoy });
console.log({ dia });

//dia = 6;

if (dia === 0) {
  console.log('Hoy es Domingo');
} else if (dia === 1) {
  console.log('Hoy es Lunes');
} else if (dia == 2) {
  console.log('Hoy es Martes');
} else if (dia == 3) {
  console.log('Hoy es Miercoles');
} else if (dia == 4) {
  console.log('Hoy es Jueves');
} else if (dia == 5) {
  console.log('Hoy es Viernes');
} else if (dia == 6) {
  console.log('Hoy es Sabado');
}

// TAREA:
const arregloDiasSemana = [
  {
    number: 0,
    day: 'Domingo'
  },
  {
    number: 1,
    day: 'Lunes'
  },
  {
    number: 2,
    day: 'Martes'
  },
  {
    number: 3,
    day: 'Miercoles'
  }
]

console.log( arregloDiasSemana[0]['day'] );

const objDiasSemana = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves', 
  5: 'Viernes', 
  6: 'Sabado', 
}

console.log( objDiasSemana[0] );

const diaLetras = ['Domingo', 'Lunes', 'Martes']
console.log( diaLetras[0] );