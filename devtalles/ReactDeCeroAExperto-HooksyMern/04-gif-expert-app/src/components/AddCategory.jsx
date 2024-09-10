import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('')

    /* const onInputChange = (event) => { // La linea de abajo hace lo mismo que esta*/
    /* const onInputChange = ({ target }) => // La linea de abajo hace lo mismo que esta { */
    const onInputChange = ({ target: { value } }) => {
        //Actualiza el input con los valores que nosotros le mandamos ya que ponemos un valor por defecto en el useState del input.
        //El atributo "onChange" analiza los cambios del input y con "value" actualiza el nuevo valor en el input.
        
        //console.log(value);
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evitamos que la pagina haga un refresh cuando se hace el submit
        
        if(inputValue.trim().length === 0) return;  // Evitamos agregar valores vacios

        // useState permite que le pasemos un callback. Evitando pasarle el atributo categories
        setCategories(categories => [inputValue, ...categories]); 
        setInputValue('');  // Limpio el input despues de agregar
    }

    return (
    //<form onSubmit={ (event) => onSubmit(event) }>  {/* Con onSubmit en el form analizamos cuando se oprime ENTER  */}
    <form onSubmit={onSubmit}>  {/* Es igual a la linea anterior, se puede simplificar si no hacemos otra accion con event */}
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            /* onChange={ (event) => onInputChange(event) } // La linea de abajo hace lo mismo que esta linea*/
            onChange={ onInputChange }
        />
        
    </form>
    )
}
