console.warn('--------------------  WHILE  -------------------- ');
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

while(i < carros.length) {
  console.log( carros[i] );
  i++;
}

// El WHILE se va a iterar siempre y cuando su condiucion sea verdadera

// NOTA: tener en cuenta los siguientes valores: null, false, undefined
// Ya que estos ultimos son tomados como FALSE


console.warn('--------------------  DO WHILE  -------------------- ');
let j = 0;

do {
  console.log( carros[j] );
  j++;
} while(j < carros.length)