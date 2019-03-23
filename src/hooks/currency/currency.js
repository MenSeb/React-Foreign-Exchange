import { useCallback, useRef } from 'react'

export default () =>
{
  const { current: options } = useRef({
    style: 'currency',
    minimumFractionDigits: 2
  })

  const refFormats = useRef( new Map() )

  const formatCurrency = useCallback(
    ({ conversion, into: currency }) =>
    {
      if ( isNaN( conversion ) ) return conversion

      const { current: formats } = refFormats

      const mapFormat = formats.get( currency )

      if ( mapFormat ) return mapFormat.format( conversion )

      const NumberFormat = new Intl.NumberFormat( undefined, { ...options, currency } )

      const newFormat = formats.set( currency, NumberFormat ).get( currency )

      return newFormat.format( conversion )
    },
    [],
  )

  return { formatCurrency }
}