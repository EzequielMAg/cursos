
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

//* Respetando el concepto de clean code, que dice que a una funcion/metodo podemos pasarle HASTA 3 argumentos, si le pasamos mas de 3
//* argumentos, mejor usemos un objeto.
//Aca a la funcion 'taxCalculation' le pasamos dos argumentos.. Pero igualmente usaremos un objeto, el cual estructuremos a traves de una interface
//Ya que posiblemente podamos adelantar que va a crecer a futuro
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {

    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

// A partir del ES6 se introdujo que: si se tiene una prop. que apunta a una variable cuyo nombre
// es indentico, podemos evitar poner el nombre del atributo, entonces quedaria como solo -> tax,
//Se podria hacer lo mismo con la variable products, pero habria que cambiar el nombre de la variable "shoppingCart"
// Pero.. tiene que tener sentido el nombre de la variable y lo dejamos como esta y tampoco esta de mas dejar el atributo tax
const result = taxCalculation({
    // tax,
    // products
    tax: tax,
    products: shoppingCart
});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);

export { }