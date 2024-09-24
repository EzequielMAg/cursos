console.log("Hola mundo!");

let a = 10,
    b = 20,
    c = 30,
    d = 40,
    x = a + b;


console.log( x );
console.warn( x );
console.error("->", x );
console.info( x );

console.log(" ---------------- ");
console.log( a );
console.log( b );
console.log( c );

console.log(" ---------------- ");
console.log('a =', a);
console.log('b', b);
console.log('c', c);

console.log(" ---------------- ");
//De esta forma con el %c se le puede añadir estilos CSS. En el segundo parametro se los agregamos.
console.log('%c Mis variables', 'color: blue; font.weight: bold'); 
console.log({ a });
console.log({ b });
console.log({ c });

console.log(" ---------------- ");
let e = 'Hola ',
    f = 'Spiderman';
// Para mostrar muchos datos, usamos esto. Recibe como parametro un arreglo o un objeto.
console.table([a, b, c, d, e, f, x]);
console.table({a, b, c, d, e, f, x});

const saludo = e + f;