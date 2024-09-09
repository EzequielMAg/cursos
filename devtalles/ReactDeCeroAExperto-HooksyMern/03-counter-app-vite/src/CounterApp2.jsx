import PropTypes from 'prop-types'

export const CounterApp2 = ({ value }) => {
  return (
    <>
        <h1>Counter App2</h1>
        <h2>{ value }</h2>
    </>
  )
}

CounterApp2.propTypes = {
    value: PropTypes.number.isRequired
}