/* 
*   Este ejercicio consiste en desustruturar todo lo mas que podamos, lo trabajo en el archivo anterior "06-function-destructuring"
*/

interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

//* Desestructurando el objeto 'phone'
// Se buscan tales atributos en el objeto que esta del lado derecho del  =.
// Los valores de los atributos del objeto se guardan en variables con el mismo nombre de los atributos del objeto.
const { description, price } = phone;

console.log(description);
console.log(price);


const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

//* Desestructurando el objeto 'tablet'
// Aca si voy guardar los valores de los atributos del objeto, en variables con un nombre distinto al de los atributos del objeto
const { description: descripcion, price: precio } = tablet;
console.log(descripcion);
console.log(precio);



interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//! Aca el prof. mejora lo que se retorna, agregando exactamente lo que se retorna, 2 numbers, un arreglo con 2 numbers, ni + ni - 
//Asi se controla mejor el resultado.
//function taxCalculation(options: TaxCalculationOptions): number[] {
function taxCalculation(options: TaxCalculationOptions): [number, number] { //! <--- Aqui
//function taxCalculation({tax, products }}: TaxCalculationOptions): [number, number] { //Si en la interface hay mas atributos, esta desectructuracion
                                                                                        //Seria muy larga, y no esta bueno
    //* Desestructuracionh del parametro 'options'
    const { tax: impuesto, products: arregloProductos} = options;   //De esta forma queda mas legible
    let total = 0;

    arregloProductos.forEach(product => {
    //arregloProductos.forEach( ({ price }) => {    //* Como es forEach, tengo el objeto de cada iteracio, y agarra su atributo 'price' con la desestructuracion.
        const {price: precioProducto } = product;
        total += precioProducto;
        //total += price;
    });

    return [total, total * impuesto];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

//* Desestructurando 'shoppingCart'
const [prod1, prod2] = shoppingCart;
const { description: descripcionTelefono, price: precioTelefono } = prod1;
const { description: deescripcionTablet, price: precioTablet } = prod2;

console.log(`Producto1[ descripcion: ${descripcionTelefono}, precio: ${precioTelefono}]`);
console.log(`Producto2[ descripcion: ${deescripcionTablet}, precio: ${precioTablet}]`);


//* Desestructurando 'result'
// const result = taxCalculation({
const [total, impuesto] = taxCalculation({
    tax: tax,
    products: shoppingCart
});

console.log('Total: ', total);
console.log('Tax: ', impuesto);

export { }