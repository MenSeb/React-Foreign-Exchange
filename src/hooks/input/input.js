import { useState, useCallback } from 'react'

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