/* 
*   VIDEO N° 90: Proyecto sistema de ventas con js

    En este ejercicio, notar que no existe una relacion de herencia entre Producto y Orden. 
    Mas bien existe una relacion de agregacion, donde en cada objeto Orden, hay varios objetos Producto
*/

class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre;
        this._precio = precio;
    }

    //#region GETTERS AND SETTERS
    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    //#endregion

    toString() {
        return `IdProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`
    }

}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }
    
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    //#region GETTERS AND SETTERS
    get idOrden() {
        return this._idOrden;
    }

    get contadorProductosAgregados() {
        return this._contadorProductosAgregados;
    }

    //#endregion

    agregarProducto(producto) {
        if (this.contadorProductosAgregados < Orden.MAX_PRODUCTOS) {
        //if (this._productos.length < Orden.MAX_PRODUCTOS) {
            
            //this._productos.push(producto);
            this._productos[this._contadorProductosAgregados++] = producto;

            //this._contadorProductosAgregados++;
        }
        else {
            console.log("No se pueden agregar mas productos! Limite de 5 productos por ticket..");
        }
    }

    calcularTotal() {
        let totalVenta = 0;

        for (const producto of this._productos) {
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden() {

        let stringOrden = "";
        /* for(const producto of this._productos) {

            // Se pasan todos los valores de cada bjeto a un arreglo
            let productoArray = Object.values(producto);
            
            // Lo transformo en un string
            let productoString = objetoArray.join(", ");

            stringTotal = stringTotal.concat(objetoString).concat("\n");
        } */

        for(const producto of this._productos) {
            stringOrden += producto.toString() + "\n";
        }

        console.log(`
----------------------------------------------------------------------------------
Orden: ${this._idOrden}, fecha: ${new Date()}

${stringOrden}
Total: $${this.calcularTotal()}
---------------------------------------------------------------------------------- `);
    }
}

let producto = new Producto("Pantalon", 9_800);
console.log(producto.toString());

let producto2 = new Producto("Camisa", 8_000);
console.log(producto2.toString());

let producto3 = new Producto("Monitor", 60_000);
let producto4 = new Producto("Teclado", 40_000);
let producto5 = new Producto("Mouse", 20_000);

let producto6 = new Producto("Celular", 150_000);

let orden = new Orden();
orden.agregarProducto(producto);
orden.agregarProducto(producto2);
orden.agregarProducto(producto3);
orden.agregarProducto(producto4);
orden.agregarProducto(producto5);
orden.agregarProducto(producto6);

orden.mostrarOrden();