class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
    
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //#region GETTERS AND SETTERS
    get idPersona() {
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

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    //#endregion

    toString() {
        // Esto es templates literals, o string literals, aunque lo vi en la facultad, y no en este curso, al menos no aun
        // LOL, vi la resolucion de este ejercicio y ahi lo enseña, al instante jajaj
        return `${this._idPersona}: ${this._nombre} ${this._apellido}, ${this._edad}`
    }
} 

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        //! NOTA: la llamnada al constructor padre, debe estar si o si en la primer linea de los constructores hijos, sino lanza error
        super(nombre, apellido, edad);
        
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //#region GETTERS AND SETTERS
    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    //#endregion

    toString() {
        return `${super.toString()}. IdEmpleado: ${this._idEmpleado}, sueldo: ${this._sueldo}`
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);

        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = new Date();
    }

    //#region GETTERS AND SETTERS
    get idCliente() {
        return this._idEmpleado;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    //#endregion

    toString() {
        return `${super.toString()}. IdCliente: ${this._idCliente}, fecha reg:  ${this._fechaRegistro}`
    }
}

/* 
    NOTA: En la resolucion hace cada clase en un archivo dintinto .js
*/

let persona = new Persona("Ezequie", "Mamani", 25);
console.log(persona.toString());

let persona2 = new Persona("Florencia", "Perez", 25);
console.log(persona2.toString());

let empleado = new Empleado("Claudia", "Mont", 25, 5000);
console.log(empleado.toString());

let empleado2 = new Empleado("Nico", "Iegna", 23, 12000);
console.log(empleado2.toString());

let cliente = new Cliente("Luis", "Perez", 35);
console.log(cliente.toString());

let cliente2 = new Cliente("Juan", "Martinez", 25);
console.log(cliente2.toString());