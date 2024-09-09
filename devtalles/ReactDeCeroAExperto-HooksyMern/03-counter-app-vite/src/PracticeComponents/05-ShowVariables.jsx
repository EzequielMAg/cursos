import PropTypes from 'prop-types'

const myName = "Ezequiel";
const message = "Este es un parrafo";

const obj = {
    name: "Ezequiel",
    age: 26
}

const getValue = () => { return 10;}

export const ShowVariables = ( {title, subtitle, fullName} ) => {

    return (
        <>
            <hr></hr>
            <h2> Mi nombre es { myName } </h2>
            <p>{ message }</p>
            <p>{ obj.name }</p>
            <p>{ obj.age }</p>

            <code>{ JSON.stringify( obj ) }</code>

            <p> mi funcion retorna: { getValue() } </p>

            <h3> { title } </h3>
            <h3> { subtitle } </h3>
            <h3> { fullName } </h3>
        
        </>
    );
}

ShowVariables.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

ShowVariables.defaultProps = {
    title: "No hay titulo :v",
    subtitle: "No hy subtitulo",
    fullName: "Ezequiel Mamani"
}


