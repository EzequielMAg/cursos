import { createTodoHTML } from "./";

let ulElement;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if(!ulElement) 
        ulElement = document.querySelector( elementId );

    if ( !ulElement ) throw new Error(`Element with id ${elementId} not found.`);

    ulElement.innerHTML = '';

    todos.forEach( todo => {    
        ulElement.append( createTodoHTML( todo ) );
    });
}
