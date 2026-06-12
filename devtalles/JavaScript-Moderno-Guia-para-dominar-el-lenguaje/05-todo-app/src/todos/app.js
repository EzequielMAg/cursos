// El ?raw es un plugin de Vite que nos permite importar el contenido de un archivo como una cadena de texto. En este caso, estamos importando 
// el contenido de app.html como una cadena de texto y asignándola a la variable html.
import { renderTodos, renderPending } from './use-cases/index';
import html from './app.html?raw'; 
import todoStore, { Filters } from './../store/todo.store';

const ElementIDs = {
    CLEAR_COMPLETED_BUTTON: '.clear-completed',
    NEW_TODO_INPUT: '#new-todo-input',
    TODO_LIST: '.todo-list',
    TODO_FILTERS: '.filtro',
    PENDING_COUNT_LABEL: '#pending-count'
};

/**
 * 
 * @param {String} elementId
 */         
export const App = ( elementId ) => {
    // Cuando la funcion App() se llama, se va a ejecutar esta función anónima inmediatamente, 
    // lo que nos va a permitir tener un scope privado para nuestra aplicación.

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TODO_LIST, todos );
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending( ElementIDs.PENDING_COUNT_LABEL );
    }

    // Cuando se llama a la función App(), se va a ejecutar esta función anónima inmediatamente, lo que nos va a permitir tener 
    // un scope privado para nuestra aplicación.
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;

        document.querySelector( elementId ).append( app );
        
        displayTodos();
    })();

    //* REFERENCIAS HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NEW_TODO_INPUT );
    const todoListUL = document.querySelector( ElementIDs.TODO_LIST );
    const clearCompleteButton = document.querySelector( ElementIDs.CLEAR_COMPLETED_BUTTON );
    const todoFiltersLIs = document.querySelectorAll( ElementIDs.TODO_FILTERS );

    //* LISTENERS / EVENTOS
     newDescriptionInput.addEventListener('keyup', ( event ) => {
        //if( event.keyCode !== 13 ) return; // 
        if( event.key !== 'Enter' ) return; // 
        if( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

 /*   todoListUL.addEventListener('click', (event) => {
        // El método closest() devuelve el elemento más cercano al elemento actual (o el mismo elemento) que coincide con el selector dado. 
        // Si no se encuentra ningún elemento coincidente, devuelve null.
        const element = event.target.closest('[data-id]'); 
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();

        console.log(event.target)
        console.log(todoStore.getTodos());
    });

    todoListUL.addEventListener('click', (event) => {
        if(!event.target.closest('.destroy')) return;

        const element = event.target.closest('[data-id]'); 
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
    });
    
    //* Otra forma de hacer lo mismo que la FN anterior:
    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy'; 
        const element = event.target.closest('[data-id]'); 
        
        if(!element || !isDestroyElement) return;
        
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
        console.log(todoStore.getTodos());
    }); */
    
    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy'; 
        const isToggleElement = event.target.className === 'toggle'; 
        
        if(!isToggleElement && !isDestroyElement) return;
        
        const element = event.target.closest('[data-id]'); 

        if(!element) return;
        const id = element.getAttribute('data-id');

        switch (event.target.className) {
            case 'toggle':
                todoStore.toggleTodo( id );
                break;
            case 'destroy':
                todoStore.deleteTodo( id );
                break;
            default:
                throw new Error('Elemento no reconocido');
        }
            
        displayTodos();
    });

    clearCompleteButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    todoFiltersLIs.forEach( element => {
        element.addEventListener('click', (event) => {

            todoFiltersLIs.forEach( e => e.classList.remove('selected') );
            event.target.classList.add('selected');

            switch( event.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
                default:
                    throw new Error('Filtro no reconocido');
            }

            displayTodos();
        });
    });
};
