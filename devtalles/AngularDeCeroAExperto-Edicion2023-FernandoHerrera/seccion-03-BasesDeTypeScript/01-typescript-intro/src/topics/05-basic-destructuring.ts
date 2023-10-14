
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


// Ambas interfaces no hacen nada por si solas, pero nos van a permitir moldear un objeto
//* Otro comando: CTRL + . -> Nos aparece un desplegable con opciones de lo que el IDE puede autocompletar o hacer por nosotros
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

console.log('Song: ' + audioPlayer.song);
console.log('Duration: ' + audioPlayer.songDuration);
console.log('Author: ' + audioPlayer.details.author);

//* La desectructuracion se puede aplicar en: objetos, a la hora de hacer importaciones/exportaciones en los modulos
//* en los argumentos de las funciones, en arreglos, etc. 

//* En general consiste, en tomar, por ejemplo del objeto "audioPlayer", ciertas piezas que me interesan
const { song } = audioPlayer;
console.log('Song: ' + song);

//Podria pasarnos que justo tengamos otra variable en nuestro programa que tenga el mismo nombre que un atributo 
//del objeto que estamos desestructurando. Ejemplo:
//*const song = 'New Song';    //Supongamos que esta esta antes de la linea 34 y q no esta comentado xD

//Ahi podemos hacer lo siguiente:
const { song: anotherSong, songDuration: duration } = audioPlayer;    //Busca el atributo 'song' en el objeto 'audioPlayer', y guarda su valor en 'anotherSong'
                                                                      //lo mismo para 'songDuration', pero lo guarda en la variable 'duration' :v.  
                                                                      //* Con los dos puntitos, estamos diciendo "Guardame el valor en esta variable".
console.log('Song: ' + anotherSong);
console.log('Duration: ' + duration);


//* TAREA: desectructuremos el atributo 'author'
const { details } = audioPlayer;
const { author } = details;
console.log('Author: ' + author);
//Lo logré!

//Intento hacerlo en una linea, y tambien lo logré, antes de ver la rta!
const { author: anotherAuthor } = audioPlayer.details
console.log('Author -> ' + anotherAuthor);

//* RTA del crack Herrera
const {
    // song:anotherSong2,
    // songDuration:duration2,
    details: {author:anotherAuthor2}} = audioPlayer;
console.log("Author --> " + anotherAuthor2);
// Herrera dice: "Hay que priorizar la lectura de nuestro codigo. En el caso que tengamos dos codigos que hagan exactamente lo mismo,
// las lineas anteriores no nos ganan mucho poder computacional, pero nos complican la existencia a la hora de leer el codigo. Sale mas
// facil hacerlo mas legible."


//! -----------------------  DESECTRUCTURACION DE ARREGLOS  -----------------------
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.error('Personaje 3: ' + dbz[2]);

const trunks = dbz[3] || "No hay personaje";
console.error('Personaje 3: ' + trunks);    // Guarda el valor "No hay persona", porque TS detecta que accedimos a una posicion
                                            // del arreglo en la que no hay nada, deberia poner "undefined" pero usa el 2do valor 
                                            // que seteamos

//* La desestructuracion en los objetos lo haciamos con llaves {} y con los arreglos lo hacemos con corchetes []
const [p1, p2, p3]:string[] = dbz;
console.log(p1, p2, p3);

//Podemos desestructurar un arreglo, para obtener un elemento de una posicion especifica de esta forma
//Claro esta que si el arreglo es muy grande.. Ahi trabajariamos de otra forma
const [ , , trunks2] = dbz;
console.log(trunks2);

// Si desestructuramos y no se encuentra el valor, igual podemos asignar un valor default si no lo encuentra, asi no 
// queda el valor undefined
const [ , , , trunks3 = 'Not found']:string[] = dbz;
console.log(trunks3);

export { }