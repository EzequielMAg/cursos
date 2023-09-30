/* 
*   VIDEO N° 75: USO DE CALL EN JS
*/

// Nos va a permitir llamar a un metodo que esta definido en un objeto, desde otro objeto
const persona1 = {
    nombre: "Ezequiel",
    apellido: "Mamani",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

const persona2 = {
    nombre: "Juan",
    apellido: "Perez",
}

console.log(persona1.nombreCompleto());

// Uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto.call(persona2));


// ------------------------------------------------------------------------------------
/* 
*   VIDEO N° 76: PASO DE ARGUMENTOS A CALL
*/
const person1 = {
    nombre: "Ezequiel",
    apellido: "Mamani",
    nombreCompleto: function(titulo, tel) {
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

const person2 = {
    nombre: "Juan",
    apellido: "Perez",
}

console.log(person1.nombreCompleto.call(person2, "Ing", "2254-411163"));
/*  Se observa que a traves de la persona1, le pasamos la referencia de otro objeto, y usa tales datos
    Tambien, la FN trabaja como 1er param al string "ing" y al nro como segundo parametro

 */