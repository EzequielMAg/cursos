/* 
*   VIDEO N° 88: Ejemplo de uso de la palabra static

*   VIDEO N° 89: Creacion de constantes estaticas
    No podemos usar la palabra reservada const, pero podemos hacerlo con un get
*/

class Persona {

    static contadoObjetosPersona = 0; // Atributo de la clase
    email ="valor default email";     // Atributo de las instancias

    static get MAX_OBJ() {
        return 5;
    }

    // CONSTRUCTOR
    constructor(nombre, apellido) {
        if(Persona.contadoObjetosPersona < Persona.MAX_OBJ) {
            this._nombre = nombre;
            this._apellido = apellido;
            
            this._idPersona = ++Persona.contadoObjetosPersona;
        }
        else {
            console.log("SE SUPERO LA CANTIDAD DE USUARIOS PERMITIDOS!");
        }
    }

    //#region GETTERS AND SETTERS
    get id() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    //#endregion

    nombreCompleto() {
        return this._idPersona + ": " + this._nombre + " " + this._apellido;
    }
    toString() {
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde metodo static");
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);    //Se esta llamando al constructor de la clase padre
        this._departamento = departamento;
    }

    //#region GETTERS AND SETTERS
    get departamento() {
        return this._apellidodepartamento;
    }
    set apellido(departamento) {
        this._departamento = departamento;
    }

    //#endregion

    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}


let persona = new Persona("Ezequiel", "Mamani");
console.log(persona);
console.log(persona.toString());

let empleado = new Empleado("Adrian", "Marquez", "Sistemas");
console.log(empleado); 
console.log(empleado.toString());

let persona2 = new Persona("Florencia", "Perez");
console.log(persona2.toString());


//* --------------------  VIDEO N° 89: Creacion de constantes estaticas  --------------------
console.log(Persona.MAX_OBJ);

Persona.MAX_OBJ = 10;

console.log(Persona.MAX_OBJ);
/* //! OBSERVACION:
    No creamos un set para poder modificar.. Pero tampoco creamos una variable.
    Esta seria una forma de crear un "atributo" estatico constante, el metodo get actua como si fuera una variable.

    Asi que, tambien podemos crear metodos get sin definir una variable
*/

console.log(Persona.contadoObjetosPersona);
let persona4 = new Persona("Adrian", "Lara");
let persona5 = new Persona("Facundo", "Toledo");

console.log(persona4.toString());
console.log(persona5.toString());

let persona6 = new Persona("Mario", "Quinteros");
console.log(persona6.toString());
console.log(persona6);

persona6.nombre = "Leo";
console.log(persona6);

console.log(Persona.contadoObjetosPersona);