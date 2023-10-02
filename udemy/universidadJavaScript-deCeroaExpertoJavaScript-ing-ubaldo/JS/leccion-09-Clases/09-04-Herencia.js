/* 
*   VIDEO N° 81: HERENCIA
    Esta es una caracteristica muy importante en la POO.
    Nos permite poder reutilizar codigo, y heredar caracteristicas y comportamientos desde una clase padra
    hacia una clase hija.

    Crearemos una clase padre llamada Persona y una clase hija llamada Empleado
    
*   VIDEO N° 82: HEREDAR METODOS 
    Crearemos un metodo en la clase padre y comprobaremos que se hereda a la clase hija -> nombreCompleto

*   VIDEO N° 83: SOBREESCRITURA
    Sobreescribiremos el metodo nombreCompleto en la clase hija

*   VIDEO N° 84: CLASE OBJECT, SOBRECARGA Y POLIMORFISMO
    Si una clase no hereda de ninguna, es decir, si no ponemos extends de X clase.. Implicitamente JS le agrega
    extends Object.. Esto significa que cualquier clase que no es hija de otra, siempre va a heredar de Object
    Object es la clase padre de todas las clases... Y esta obtiene varios metodos
    Por ejemplo, el toString, es buena practica agregar y sobreescribir tal metodo en nuestras clases

    Existen metodos en la clase Object pero tambien en el prototype y las heredan todas las clases automaticamente

*   VIDEO N° 85: PALABRA RESERVADA STATIC
    Sirve para agregar atributos o metodos que se asocien con la clase, es decir, que pertenezcan a la clase y no
    a las instancias, es independiente de una instancia. No debo crear una instancia para usar tales atributos
    o metodos estaticos

*   VIDEO N° 86: ATRIBUTOS ESTATICOS

*   VIDEO N° 87: ATRIBUTOS ESTSTATICOS VS NO ESTATICOS
*/


class Persona {

    static contadoObjetosPersona = 0; // Atributo de la clase
    email ="valor default email";     // Atributo de las instancias

    // CONSTRUCTOR
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        
        Persona.contadoObjetosPersona++;
    }

    //#region GETTERS AND SETTERS
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

    // Notese que no estaba creando una variable/atributo ni tampoco estamos usando la palabra function, 
    // esto es posible dentro de una clase, ya se sobreentiende que es una funcion
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }
    // Este metodo anterior es algo simple, pero nos ayudara a comprobar que se hereda a la clase hija

    // Sobreescribiendo el metodo de la clase padre: Object. 
    toString() {
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    //Metodo estatico
    static saludar() {
        console.log("Saludos desde metodo static");
    }

    // A un metodo estatico podemos pasarle una instancia
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

    // Sobreescritura. El nombre del metodo a sobreescribir debe ser exactamente el mismo q el de la clase padre, 
    // sino estariamos creando un nuevo metodo. Y tambien debe tener los mismos parametros
    nombreCompleto() {
        //return this._nombre + " " + this._apellido + ", " + this._departamento;

        // Podemos reutilizar el codigo de la clase padre dela siguiente forma:
        return super.nombreCompleto() + ", " + this._departamento;
    }

}


let persona = new Persona("Ezequiel", "Mamani");
console.log(persona);

let empleado = new Empleado("Adrian", "Marquez", "Sistemas");
console.log(empleado);
console.log(empleado.nombre);


//* ---------------------------  VIDEO N° 82: HEREDAR METODOS  ----------------------------
//* ---------------------------  VIDEO N° 83: SOBREESCRITURA  -----------------------------
console.log(empleado.nombreCompleto());

//* ---------------  VIDEO N° 84: CLASE OBJECT, SOBRECARGA Y POLIMORFISMO  ----------------
// Sobreescribimos el metodo toString heredado de Object, en la clase padre
console.log(persona.toString());

// Obervamos que en la siguiente linea, el toString es heredado a empleado, y este metodo internamente llama
// al metodo nombreCompleto() pero de la clase hija -> esto se denomina POLIMORFISMO (multiples formas en tiempo de ejecucion)
console.log(empleado.toString());

//* -----------------------  VIDEO N° 85: PALABRA RESERVADA STATIC  -----------------------
//persona.saludar(); // Nos tira error que no es una funcion
// No la podemos usar desde un objeto, ya que este metodo estatico, pertenece a la clase y no a los objetos

// Lo llamamos desde la clase, como tiene que ser
Persona.saludar();

// Usando el metodo static al q le pasamos una instancia
Persona.saludar2(persona);

// OBSERVACION: no podemos ver la salida de los metodos static en quokka, lo podemos ver en la consola
//              pero si vamos a la clase, si se va a poder ver la salida desde quokka, porque son de la clase

// Desde una clase hija tambien se pueden llamar a los metodos estaticos
Empleado.saludar();
Empleado.saludar2(empleado);

//* -----------------------  VIDEO N° 86: ATRIBUTOS ESTATICOS  -----------------------
// Lo siguiente nos retorna undefined, porq al igual que los metodos static, un atributo static
// pertenece a la clase y no a las instancias, asi que no debemos llamarla desde un objeto
persona.contadoObjetosPersona;
console.log(persona.contadoObjetosPersona);

// Forma correcta
console.log(Persona.contadoObjetosPersona);

console.log(Empleado.contadoObjetosPersona);

//* --------------  VIDEO N° 87: ATRIBUTOS ESTSTATICOS VS NO ESTATICOS  --------------
console.log(persona.email);
console.log(empleado.email);

console.log(Persona.email);

