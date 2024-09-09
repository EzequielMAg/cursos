import { Fragment } from 'react';

// Ya que no podemos retornar todo suelto, o es molesto envolverlo en un div o tal vez
// solo queremos devolver una conjunto de codigo HTML y que no se modifique el resto de nuestro codigo
// es porque existe Fragment.. 
export const PracticeFragment = () => {
    return (
        <Fragment>
        <hr></hr>
        <h2> Ezequiel </h2>
        <p> Este es un párrafo </p>
        </Fragment>
    );
}

