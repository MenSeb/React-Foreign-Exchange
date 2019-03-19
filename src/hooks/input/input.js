import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

export default function useInput ({ validation, initialValue = '' })
{
  const [ value, setValue ] = useState( initialValue )

  const changeValue = useCallback(
    ({ target: { value } }) =>
    {
      setValue(
        currentValue =>
          validation.test( value ) ?
            value
            :
            currentValue
      )
    },
    [ validation ]
  )

  return { value, changeValue }
}

useInput.propTypes = {
  validation: ( props, name, source ) =>
  {
    if ( !props[ name ] instanceof RegExp )
      return new Error(
        `Invalid validation from ${ source }. Should be a RegExp.`
      )
  },
  initialValue: PropTypes.string,
}