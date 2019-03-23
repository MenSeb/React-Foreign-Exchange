import { useCallback, useState, useRef } from 'react';

export default ({ base, rates }) =>
{
  const { current: initialState } = useRef({
    conversion: 'Conversion will be here',
    valid: true
  })

  const { current: invalidState } = useRef({
    conversion: 'Missing amount or currencies',
    valid: false
  })

  const [ conversion, setConversion ] = useState( initialState )

  const getConversionRate = useCallback(
    ({ from, into }) =>
    {
      const rateInto = rates[ into ]

      if ( from === base ) return rateInto

      const rateFrom = 1 / rates[ from ]

      if ( into === base ) return rateFrom

      return rateInto * rateFrom
    },
    [ base, rates ]
  )

  const convert = useCallback(
    ({ hasChange, validValues, values }) =>
    {
      setConversion(
        currentConversion =>
        {
          const { valid } = currentConversion

          if ( !validValues && valid ) return invalidState

          if ( !hasChange || ( !validValues && !valid ) )
            return currentConversion

          const { amount } = values

          const rate = getConversionRate( values )

          return { conversion: amount * rate, valid: true, ...values }
        }
      )
    },
    [],
  )

  return { ...conversion, convert }
}