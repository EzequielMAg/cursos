//* (2) Ahora si importo. Traduciendo un poco, singnifica que se trae un objeto, el cual se va a desestructurar O::
//  del path tal...

// import { Product } from './06-02-homework-clean'
// import { taxCalculation } from './06-02-homework-clean';
import { Product, taxCalculation } from './06-02-homework-clean' //Esta linea es equivalente a las dos anteriores
//En las lineas anteriores no hace falta especificar el formato del archivo "".ts".  Tanto este como el otro file son .ts


/*//* MODULOS

    - En esta clase no pondremos mas el -> 'export {}' al final del codigo

    - La idea de las importaciones y exportaciones no se resume a mas que nosotros tengamos una funcionalidad encapsulada.

    - Cuando nosotros hacemos un export/import, o cuando haciamos el 'export {}', lo que haciamos era transformar tales 
      archivos en modulos. Osea que esos modulos estan encapsulados, aunque lo unico que esta siendo exportado, es lo que
      se expone al mundo exterior. Entiendase como mundo exterior cualquier cosa que se encuentra fuera de este archivo
      "07-import-export".

    - Exportar significa, por ejemplo si exporto una interface, seria ponerla en el mundo exterior, para que el mundo
      exterior pueda utilizarla en sus programas y toda la aplicacion va a utilizar esa misma interfaz.
*/

//!Antes de importar nada... (1)
//Aqui defino una variable que es de tipo Product... La cual por el momento no existe en este archivo
//pero la tengo definida en el archivo que se trabajo en la clase anterior (06-function-destructuring)
const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "iPad",
        price: 150
    }
];

//Tax = 0.15
const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', tax);
 


//! MAS NOTAS: 
//* Cuando hacemos una importacion, Ts tambien ejecuta todo ese archivo importado
// por eso es que en la consola se ven los console.log() del otro archivo.
//* Por lo que.. a menos que sea necesario, todo lo que importemos de otro archivo, debemos asegurarnos 
//* de no ejecutar nada en tal archivo importado, nada de imprimir cosas ni declarar variables ni llamada de funciones
//* si no estariamos reservando memoria innesariamente y hasta se podrian producir eventos que no queremos en nuestro programa.
//* Es mas, en el archivo importado, solo deberian estar las cosas que se van a exportar