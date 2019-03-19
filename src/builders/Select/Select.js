import React from 'react'
import PropTypes from 'prop-types'
import { useSelect } from '../../hooks'

export default function Select ({ options, ...props })
{
  const { value, content, listeners } = useSelect( options )

  return (
    <select { ...props} { ...listeners } value={ value }>
      { content }
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.element,
  ).isRequired,
}