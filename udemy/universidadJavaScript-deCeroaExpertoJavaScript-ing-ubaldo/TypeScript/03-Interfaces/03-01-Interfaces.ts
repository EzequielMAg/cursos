/* 
*   VIDEO N°244: Definicion de interfaces en TS

    Una interface es un contrato que se debe respetar por las clases que la van a oimplementar. 
    Este contrato va a contener cierto atributos o metodos. Y con respetar, nos referimos que las clases que
    implmementen la interface, van a tener que definir tales metodos y atributos y darles su propio comportamiento,
    osea darle cuerpo al metodo.
*/

interface Usuario {
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string; //Con el ? decimos que este atributo es opcional
}

// Estamos creando una variable usuario, que va a respetar el formato establecido en la interface
// Asi que aca tenemos un usuario, que esta respetando el contrato Usuario
let usuario1: Usuario = { nombreUsuario: "Juan", password: "1234", confirmarPassword: "1234" };
let usuario2: Usuario = { nombreUsuario: "Ezequiel", password: "abc" };    //Confirmamos que el atributo con ? es opcional

//let usuario3:Usuario = {nombreUsuario: "Juan"}; //En este tira error, porque le falta 1 atributo, osea, no cumple el contrato

console.log(usuario1);
console.log(usuario2);

// ---------------------------------------
// Otra interfaz
interface Abordar {
    abordarTransporte(): void;
}

// Crearemos una variable que implemente tal interfaz
let avion: Abordar = {

    abordarTransporte: function () {
        console.log("Abordando...");
    }
}

avion.abordarTransporte();
console.log(typeof avion);
console.log(avion);

/* //* NOTAS EXTRAS:

*   OBSERVACION:
        Me di cuenta, que en ambas variables, "usuario1" y "avion" que implementan cada una una interface, no pueden agregar
        mas atributos o metodos dentro del objeto literal.. Lo intente y me tira un error, por ejemplo:
        "El objeto literal sólo puede especificar propiedades conocidas y 'edad' no existe en el tipo 'Usuario'."
        Al querer agregarle un atributo "edad" al usuario1.

*    RTA DE CHAT GPT: 
        En TypeScript, cuando declaras un tipo de objeto mediante una interfaz o un tipo, el objeto debe cumplir con exactitud 
        la estructura definida en ese tipo.

        Y con las clasas pasa exatamente lo mismo:
        "Cuando una clase implementa una interfaz en TypeScript, la clase debe cumplir con exactitud la estructura definida en
        esa interfaz".
        "Si intentas agregar miembros adicionales a una clase que implementa una interfaz, TypeScript generará un error de compilación."

*   Luego de esto.. Me cuesta ver cuando usaria una interface.. SI la implemento a distintas clases, va a ser iguales en su estructura
*   RTA DE CHAT GPT: 
        Las interfaces se utilizan para definir contratos o tipos de datos. No pueden tener implementaciones concretas de métodos
        ni contener atributos con valores reales. En lugar de eso, declaran la estructura que deben seguir las clases o los objetos. 
        Las interfaces son útiles para definir contratos que las clases deben cumplir. Pueden representar la forma en que las clases 
        deben comportarse sin preocuparse por la implementación concreta. Las interfaces también pueden ser implementadas por múltiples 
        clases, lo que permite la creación de código más genérico y flexible.
*/