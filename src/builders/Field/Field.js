import React from 'react'
import PropTypes from 'prop-types'

export default function Field ({ legend, children, ...props })
{
  return (
    <fieldset { ...props }>
      <legend>{ legend }</legend>
      { children }
    </fieldset>
  )
}

Field.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf( PropTypes.element ),
  ]).isRequired,
  props: PropTypes.object,
}