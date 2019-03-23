import { useCallback, useEffect, useRef } from 'react'

export default ids =>
{
  const refForm = useRef()
  const refElements = useRef()
  const refValues = useRef()

  const getElements = useCallback(
    () => ids.reduce(
      ( obj, id ) => ({
        ...obj,
        [ id ]: refForm.current[ id ]
      }),
      {}
    ),
    [ ids ]
  )

  const getValues = useCallback(
    () => Object.entries( refElements.current ).reduce(
      ( obj, [ id, { value } ] ) => ({
        ...obj,
        [ id ]: value
      }),
      {}
    ),
    [ ids ]
  )

  const compareValues = useCallback(
    ({ prevValues, nextValues }) => Object.entries( nextValues ).some(
      ([ nextKey, nextValue ]) => prevValues[ nextKey ] !== nextValue
    ),
    []
  )

  const validateValues = useCallback(
    values => !Object.values( values ).some( value => !value ),
    []
  )

  useEffect(
    () =>
    {
      refElements.current = getElements()
      refValues.current = getValues()
    },
    []
  )

  const getFormData = useCallback(
    () =>
    {
      const { current: prevValues } = refValues

      const nextValues = getValues()

      const validValues = validateValues( nextValues )

      const hasChange = compareValues({ prevValues, nextValues })

      let values = prevValues

      if ( hasChange )
      {
        refValues.current = nextValues

        values = nextValues
      }

      return { hasChange, validValues, values }
    },
    []
  )

  return { refForm, getFormData }
}