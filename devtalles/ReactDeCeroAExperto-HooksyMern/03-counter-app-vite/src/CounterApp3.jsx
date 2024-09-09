import PropTypes from 'prop-types'
import { useState } from 'react' // Empezando a trabajar con Hooks

export const CounterApp3 = ({ value}) => {
  const [ counter, setCounter ] = useState(value);

  const hadleAdd = () => {
    setCounter( counter + 1 );
  }
  
  const hadleDecrement = () => {
    setCounter( counter - 1 );
  }  
  
  const resetCounter = () => {
    setCounter( value );
  }

  return (
    <>
        <h1>Counter App</h1>
        <div className='reduce-container'>
          <div className='display-flex'>
            <button onClick={ hadleDecrement }>-</button>
            <h2> { counter } </h2>
            <button onClick={ hadleAdd } >+</button>
          </div>
          
          <button className='expand-button' onClick={ resetCounter } >reset</button>
        </div>
    </>
  )
}
