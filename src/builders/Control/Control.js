import React from 'react'
import PropTypes from 'prop-types'

export default function Control ({ id, label, control, Control })
{
  return (
    <section className='control'>
      <label htmlFor={ id }>
        { label }
        <Control { ...control } id={ id } />
      </label>
    </section>
  )
}

Control.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  Control: PropTypes.func.isRequired,
}