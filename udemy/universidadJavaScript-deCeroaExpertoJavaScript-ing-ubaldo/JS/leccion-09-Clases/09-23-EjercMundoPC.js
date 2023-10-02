/* 
    En cada ejercicio mire el UML y realice todo el programa, me quedo genial! Sin ver la resolucion..
    Fue facil, porque tengo bastante base, primero con C y luego con Java..
*/

class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    //#region GETTERS AND SETTERS
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    //#endregion

    toString() {
        return `TIPO DE ENTRADA: ${this._tipoEntrada}, MARCA: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `RATON ID..: ${this._idRaton}, ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `TECLADO ID: ${this._idTeclado}, ${super.toString()}`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    //#region GETTERS AND SETTERS
    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamanio() {
        return this._tamanio;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }
    //#endregion

    toString() {
        return `MONITOR ID: ${this._idMonitor}, MARCA: ${this._marca}, TAMAÑO: ${this._tamanio}`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;

        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    //#region GETTERS AND SETTERS
    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }
    //#endregion

    toString() {
        return `
        COMPUTADORA ID: ${this._idComputadora}, NOMBRE: ${this._nombre}
          ${this._monitor.toString()}
          ${this._teclado.toString()}
          ${this._raton.toString()}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let stringOrden = "";
        for(const computadora of this._computadoras) {
            stringOrden += computadora.toString() + "\n\n";
        }

        console.log(`
    ORDEN ID: ${this._idOrden}  FECHA: ${new Date()}
            ${stringOrden}`);
    }
} 

//* --------------------------------  RATONES  -------------------------------
let raton = new Raton("USB", "Genius");
console.log(raton.toString());

let raton2 = new Raton("Bluetooth", "Logitech");
console.log(raton2.toString());


//* -------------------------------  TECLADOS  -------------------------------
let teclado = new Teclado("USB", "Redragon");
console.log(teclado.toString());

let teclado2 = new Teclado("Bluetooth", "Redragon");
console.log(teclado2.toString());


//* ------------------------------  MONITORES  -------------------------------
let monitor = new  Monitor("LG", "19\"");
console.log(monitor.toString());

let monitor2 = new Monitor("Samsung", "21\"");
console.log(monitor2.toString());


//* -----------------------------  COMPUTADORAS  -----------------------------
let computadora = new  Computadora("PC Max Speed 2022", monitor, teclado, raton);
console.log(computadora.toString());

let computadora2 = new Computadora("PC Ultimate 2023", monitor2, teclado2, raton2);
console.log(computadora2.toString());

 
//* --------------------------------  ORDENES  -------------------------------
let orden = new Orden();
orden.agregarComputadora(computadora);
orden.agregarComputadora(computadora2);
orden.agregarComputadora(computadora2);

orden.mostrarOrden();


let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora);

orden2.mostrarOrden();