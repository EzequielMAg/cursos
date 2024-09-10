import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball Z' ])

    /* const onAddCategory = (inputValue) => {

        setCategories([...categories, inputValue]);
    } */

    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories } /> {/* Le estamos pasando la referencia de la funcion al componente hijo*/}

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory } >Agregar</button>  */}
            <ol>
                { 
                    categories.map( category => {
                    return <li key={ category } >{ category }</li>;
                } ) }
            </ol>

                {/* Gif Item */}

        </>
    )
}
