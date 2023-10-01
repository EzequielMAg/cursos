/* 
*   VIDEO N° 107: SOBREESCRITURA (repaso)
Ya hablamos sobre este tema, pero vamos a formalizarlo un poco mas.

Ejemplo: Una madre en la vida real y su hija. Si la madre tiene una buena voz, es probable que la hija
    tambien lo haga, aunque la hija no cantara exactamente igual que la madre, cantara de una forma propia,
    pero varias de sus caracteristicas en su voz, la va a heredar de su madre

    Llendo al codigo, digamos que se tiene una clase Empleado y una clase Gerente. Y este ultimo hereda de Empleado
    Si Empleado tiene un metodo obtenerDetralles(), Gerente tambien la hereda.. Aunque a comparacion del empleado
    lo va a hacer de otra forma, es decir, HEREDA EL COMPORTAMIENTO, PERO LO IMPLEMENTA DE OTRA FORMA, a su modo
    para eso, es que se SOBREESCRIBE el metodo, 

*   VIDEO N° 109: POLIMORFISMO
    Significa, multiples formas.     

*   VIDEO N° 110: INSTANCE OF 
    En ocasiones puede ser necesario saber con que tipo de instancia estamos trabajando. Para esto es que existe instanceof
*/

class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
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

    obtenerDetalles() {
        return `EMPLEADO: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}


class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }
    obtenerDetalles() {
        // Recordar que siempre podemos acceder a los metodos de la clase padre "originales" a traves de super
        return `GERENTE: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

let empleado = new Empleado("Adrian", 60_054);
//console.log(empleado.obtenerDetalles());

let gerente = new Gerente("Ezequiel", 50_000, "sistemas");
//console.log(gerente.obtenerDetalles());


//* ---------------------  VIDEO N° 109: POLIMORFISMO  ---------------------
// Esta FN puede llamar tanto al metodo de la clase padre, como de la clase hija, segun el objeto que le pasemos
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}

imprimir(empleado);
imprimir(gerente);


//* ---------------------  VIDEO N° 110: INSTANCEOF  ---------------------
function determinarTipo(tipo) {

    if(tipo instanceof Gerente) {
        console.log("Es una instancia de tipo GERENTE");
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado) {
        console.log("Es una instancia de tipo EMPLEADO");
    }
    else if(tipo instanceof Object) {
        console.log("Es una instancia de tipo OBJECT");
    }

    /* if(tipo instanceof Object) {
        console.log("Es una instancia de tipo OBJECT");
    } */

/* //! OBSERVACIONES:
*       Se notó que si a una instancia de una clase hija se le pregunta, si es de un tipo superior, SIEMPRE VA A DAR TRUE
*       Ejemplo: si a una instancia de la clase Gerente, que es hija de la clase Empleado, le pregunto si es instancia de Empleado, ME VA A DAR TRUE, lpm!
*       cuando en realidad es una instancia de la clase GERENTE! Peeero, al ser una instancia de una clase que esta mas abajo en la jerarquia, siempre 
*       que se le pregunta por una clase superior, cualquiera, mientras sea superior, va a dar TRUE.

*       LA CLAVE ESTA EN: preguntar primero si es instancia de una clase que este mas abajo en la jerarquia de clases, y de ahi para arriba.. Pero si }
*       entra en una condicion, NO dejarle pasar hacia otra condicion, si no va a dar TRUE en mas de una.

*       Tanto Empleado como Gerente, estan debajo de Object, porque este esta arriba de todo en la jerarquia de clases... 
*       Asi que si tengo una instancia de cada uno y le preguntamos si son instancias de Object, va a dar TRUE!
*/

}
determinarTipo(empleado);
determinarTipo(gerente);
