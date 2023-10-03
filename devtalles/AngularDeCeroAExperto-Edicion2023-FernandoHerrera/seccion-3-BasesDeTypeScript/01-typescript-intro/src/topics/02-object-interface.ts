// Si ponemos el cursor del mouse sobre la variable 'skills' nos damos cuenta que TS infiere en un arreglo de strings
// Pero nada nos impide agregar un valor distinto, un number o un boolean
// Nos damos cuenta de que TS esta haciendo lo mejor que puede para inferir los tipos
// Ahora nos dice lo siguiente → let skills: (string | boolean)[]
// Que es un arreglo que puede tener string o valores booleanos
let skills = ['Bash', 'Counter', 'Healing', true];

// Y ahora nos dice lo siguiente → let skills2: (string | number | boolean)[]
// Que es un arreglo que puede tener string o numbers o valores booleanos
let skills2 = ['Bash', 'Counter', 'Healing', true, 123];
















//volvemos a escribir esto aqui, estamos exportando un objeto vacio
//Pero olvidemosnos de esto, lo veremos mas adelante
export {};