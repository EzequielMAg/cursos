import { Todo } from "../models/todo.model";

/**
 * Crea el elemento HTML para un todo.
 * @param {Todo} todo - El todo para el cual crear el elemento HTML.
 * @returns {HTMLElement} - El elemento HTML del todo.
 */
export const createTodoHTML = ( todo ) => {
    if ( !todo ) throw new Error('Todo is required to create the HTML element.');

    const { done, description, id } = todo;

    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
        <label> ${ description } </label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`

    const liElement = document.createElement ('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    if( todo.done)
        liElement.classList.add('completed');
    
    return liElement;
}
