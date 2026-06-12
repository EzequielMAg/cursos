import { Todo } from '../todos/models/todo.model';

// Enum para los filtros, es decir, para las diferentes formas de filtrar los todos.
export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

// El state es un objeto que contiene toda la información de nuestra aplicación, en este caso, los todos y el filtro actual.
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),
        new Todo('Piedra del poder'),
    ],
    filter: Filters.All
}

const initStore = () => { 
    loadStore();
    console.log('InitStore 🏁');
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;
 
    console.log("->");
    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

/**
 * Función para obtener los todos filtrados según el filtro seleccionado.
 * @param {String} filter El filtro que queremos aplicar, puede ser "All", "Completed" o "Pending". Por defecto es "All".
 * @returns Un array de todos filtrados según el filtro seleccionado.
 */
const getTodos = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:   
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Filter ${filter} is not supported.`);
    }
}

/**
 * Función para agregar un nuevo todo, es decir, agregar un nuevo todo al array de todos.
 * @param {String} description La descripción del todo que queremos agregar.
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );

    saveStateToLocalStorage();
}

/**
 * Función para cambiar el estado de un todo, es decir, marcarlo como completado o pendiente.
 * @param {String} todoId El id del todo que queremos cambiar su estado.
 */
const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });

    saveStateToLocalStorage();
}

/**
 * Función para eliminar un todo, es decir, eliminarlo del array de todos.
 * @param {String} todoId El id del todo que queremos eliminar.
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateToLocalStorage();
}

/**
 * Función para eliminar los todos completados. Es decir, eliminar todos los todos que tengan el estado "done" en true.
 */ 
const deleteCompleted = ( ) => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveStateToLocalStorage();
}

/**
 * Función para establecer el filtro seleccionado.
 * @param {Filters} newFilter El filtro que queremos seleccionar, puede ser "All", "Completed" o "Pending". Por defecto es "All".
 */
const setFilter = ( newFilter = Filters.All ) => {
    //  TODO: investigar como hacer la validacion de un enum -> PISTA: Object.keys(Filters).include.........
    state.filter = newFilter;
    saveStateToLocalStorage();
}   

const getCurrentFilter = () => {
    return state.filter;
}

// Exortamos un objeto con la función initStore, que es la única función que queremos que sea accesible desde fuera de este modulo.
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}

/**
 * NOTAS: 
 * 
 * 1) Todas las funciones en este archivo al no tener un "export" no pueden ser accedidas desde fuera, es decir, 
 *    son privadas en este modulo.
 * 2) Entiendase como "modulo" a este archivo, es decir, todo lo que esta dentro de este archivo es un modulo, y 
 *    lo que se exporta es lo que se puede acceder desde fuera.
 */
