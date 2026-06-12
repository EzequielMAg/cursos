// Con esta importación estamos trayendo la función v4 del paquete uuid, que nos permite generar identificadores únicos. 
// La función v4 genera un UUID aleatorio, lo que es perfecto para nuestros propósitos de generar IDs únicos para cada todo.
import { v4 as uuid } from 'uuid';


export class Todo {

    /**
     * El constructor de la clase Todo recibe una descripción, que es el texto que describe la tarea que queremos realizar.
     * Luego, dentro del constructor, se asignan las propiedades del objeto Todo:
     * - id: se genera un ID único utilizando la función uuid() que importamos al principio.
     * @param {String} description 
     */
    constructor( description ) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}

