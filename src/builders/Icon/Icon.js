import React from 'react'
import PropTypes from 'prop-types'

export default function Icon ({
  name,
  viewBox = '-10 -10 20 20',
  ...props
})
{
  return (
    <svg { ...props } viewBox={ viewBox }>
      <use xlinkHref={ `#${ name }` } />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  props: PropTypes.object,
}