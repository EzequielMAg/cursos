/* 
*   VIDEO N° 77: METODO APPLY
*/

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

// Sucede lo mismo que con call()
console.log(persona1.nombreCompleto.apply(persona2));


//* Hay una diferencia cuando se le pasan parametros
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

console.log(person1.nombreCompleto("Lic.", "2254-533720"));
console.log(person1.nombreCompleto.apply(person2, ["Ing", "2254-411163"]));

//* La diferencia es que en vez de pasarle los datos separados por comas, apply(), pide un arreglo
