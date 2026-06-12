function Persona (nombre, edad) {
  console.log('Se ejecuto esta linea');

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Hola, mi nombre es ${ this.nombre } y tengo ${ this.edad } años`);
  }
}

const maria = new Persona('Maria', 18); // Creando una nueva instancia de PERSONA

console.log( maria );
maria.imprimir(); // Hola, mi nombre es Maria y tengo 18 años

const juan = new Persona('Juan', 25); // Creando una nueva instancia de PERSONA 
console.log( juan );
juan.imprimir(); // Hola, mi nombre es Juan y tengo 25 años

