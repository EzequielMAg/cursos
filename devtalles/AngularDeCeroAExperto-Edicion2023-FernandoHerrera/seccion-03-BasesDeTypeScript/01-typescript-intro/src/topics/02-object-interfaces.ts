// Si ponemos el cursor del mouse sobre la variable 'skills' nos damos cuenta que TS infiere en un arreglo de strings
// Pero nada nos impide agregar un valor distinto, un number o un boolean
// Nos damos cuenta de que TS esta haciendo lo mejor que puede para inferir los tipos
// Ahora nos dice lo siguiente → let skills: (string | boolean)[]
// Que es un arreglo que puede tener string o valores booleanos
let skills = ['Bash', 'Counter', 'Healing', true];

// Y ahora nos dice lo siguiente → let skills2: (string | number | boolean)[]
// Que es un arreglo que puede tener string o numbers o valores booleanos
let skills2 = ['Bash', 'Counter', 'Healing', true, 123];

// Seria bueno que typescript forzara/obligara a cumplir la condicion que quiero especificar: que todos sean string
let skills3: string[] = [];
//skills3 = ['Bash', 'Counter', 'Healing', true, 123];    //Tira un error, ya que le definimos el tipo
skills3 = ['Bash', 'Counter', 'Healing'];


//* REGLA EN JS: si no estas seguro de que una variable va a cambiar, ponle const


const strider = {
    name: 'Strider',    //En este objeto literal, no puedo poner el tipo de dato para obligar q este atributo sea siempre un string
    //name:string: 'Strider',    //Esto nos tira error, no podemos hacerlo, tecnicamente, seria como romper una regla de JS si definimos los tipos aqui
    hp: 100,
    skills: ['Bash', 'Counter']    
}

//*Para tipar de manera estricta este personaje, una forma, son las interfaces
//Cuando se transpila el codigo Ts a Js, las interfaces representan 0 lineas de codigo de js, porque las interfaces no existen en JS
interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string;    //De esta forma declaramos un atributo opcional, es decir que todo objeto que implemente la interfaz, puede optar por
                          //no usar este atributo, y despues si quierem puede agregarlo y/o quitarlo nuevamente.
}

//De esta forma decimos que el objeto literal va a implementar la interface 'Character'
const strider2: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider2.hometown = "Rivendell";
console.table(strider2);


//volvemos a escribir esto aqui, estamos exportando un objeto vacio
//Pero olvidemosnos de esto, lo veremos mas adelante
export {};