import todoStore, { Filters } from "../../store/todo.store";

let element;

/**
 * Función para renderizar el número de todos pendientes, es decir, el número de todos que no están marcados como completados.
 * @param {String} elementId 
 */
export const renderPending = (  elementId ) => {
    if( !element) 
        element = document.querySelector( elementId );

    if( !element)
        throw new Error(`Element ${ elementId} not found`);

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;
}