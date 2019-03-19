import React from 'react'
import PropTypes from 'prop-types'

export default function FieldControl ({
  id,
  label,
  control,
  Control,
  ...props
})
{
  return (
    <section { ...props }>
      <label htmlFor={ id }>
        { label }
        <Control { ...control } id={ id } />
      </label>
    </section>
  )
}

FieldControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  Control: PropTypes.func.isRequired,
  props: PropTypes.object,
}