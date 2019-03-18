import React from 'react'
import PropTypes from 'prop-types'

export default function Button ({ children, ...props })
{
  return (
    <input { ...props } type='button' value={ children } />
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}