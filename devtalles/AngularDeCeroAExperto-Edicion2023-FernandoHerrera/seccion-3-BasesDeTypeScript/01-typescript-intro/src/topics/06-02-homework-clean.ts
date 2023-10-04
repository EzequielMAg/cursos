/* 
*   Este ejercicio consiste en desustruturar todo lo mas que podamos, lo trabajo en el archivo anterior "06-function-destructuring"
    Aqui lo pase a limpiooo..
*/

export interface Product {
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


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, impuesto] = taxCalculation({
    tax: tax,
    products: shoppingCart
});

/* console.log('Total: ', total);
console.log('Tax: ', impuesto); */