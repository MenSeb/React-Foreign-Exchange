import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '../../hooks'

export default function Input ({ initialValue, validation, ...props })
{
  const { value, changeValue } = useInput({ initialValue, validation })

  return (
    <input { ...props } value={ value } onChange={ changeValue } />
  )
}


Input.propTypes = {
  validation: ( props, name, source ) =>
  {
    if ( !props[ name ] instanceof RegExp )
      return new Error(
        `Invalid validation from ${ source }. Should be a RegExp.`
      )
  },
  initialValue: PropTypes.string,
}