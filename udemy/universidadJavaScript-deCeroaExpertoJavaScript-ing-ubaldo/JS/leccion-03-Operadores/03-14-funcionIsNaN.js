/* 
*   VIDEO N° 32: Funcion isNaN

    NOTA: todos los videos anterior tambien me los mire rapido y no replique codigo para no perder mucho tiempo, 
          ya que son ejercs basicos
*/

let miNumero = "14";
let adulto = 16;

let edad = Number(miNumero);
console.log(edad);

console.log(isNaN(miNumero));

if(isNaN(miNumero)) {
    console.log("No es un numero");
} 
else {
    if(edad >= adulto) {
        console.log("Puede votar");
    }
    else {
        console.log("Muy joven para votar");
    }
}

if(isNaN(miNumero)) {
    console.log("No es un numero");
}
else {
    let resultado = (edad >= adulto) ? "Puede votar" : "Muy joven para votar"; 
    console.log(resultado);
}