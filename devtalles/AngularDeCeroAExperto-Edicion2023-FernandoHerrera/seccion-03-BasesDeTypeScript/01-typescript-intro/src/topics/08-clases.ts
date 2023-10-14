
export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name:string, 
        private address: string = 'No address',  //Como le puse un valor por default, el parametro pasa a ser opcional en el constructor
        ) {                                      // Ts hace esto, y tiene sentido, porque si no se pasa el argumento, se usa tal valor default.
    /* constructor() {
        this.name = "Fernando";
        this.address = "New York"; */
        this.name = name;
        this.address = address;
    }
}

// const ironman = new Person('Iron-man', 'New York');

// console.log(ironman);
// console.log(ironman.name);
/* console.log(ironman.address); */ /* //* En esta linea nos muestra un error, porq el atributo es privado y no se podria acceder
                                         * Peero, recordemos que Ts es transpilado, y cuando pasa a Js, esto si se puede hacer
                                         * Ya que no existen atributos privados en js. Igualmente Ts no avisa que esta mal.
                                         * Y en angular se puede configurar para que el codigo no transpile si hay errores de ese nivel.     */

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName:string
    ) {
        super(realName, "New York");
    }
}

// const ironman = new Hero('Iron-man', 45, 'Tony');
// console.log(ironman);
// console.log(ironman.name);

/* //! NOTAS: 
*       No se recomienda tener mas de 3 niveles de herencia.. Reduce la legibilidad. Se va a priorizar la COMPOSICION por sobre la herencia.
*/

//Vamos a evitar tener la herencia de Person en Heroe.. Haremos composicion. Para no comentar la clase "Hero" anterior, hare "Hero2" y "Person2" x varios cambios

export class Person2 {

    constructor(
        public name:string, 
        public surname: string,
        private address: string = 'No address',  
        ) {
        this.name = name;
        this.address = address;
    }
}

export class Hero2 {
    // public person2: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName:string,
        public person: Person2
    ) {
        // this.person = new Person(alterEgo);

    }
}

const tony = new Person2('Tony', 'Stark', 'New York');

const ironman = new Hero2('Iron-man', 45, 'Tony', tony);
console.log(ironman);