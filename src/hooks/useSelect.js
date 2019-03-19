import React, { useState, useCallback, useMemo, useRef } from 'react'

export default options =>
{
  const { current: initialState } = useRef({ value: '', focus: false })

  const { current: events } = useRef([ 'onChange', 'onBlur', 'onFocus' ])

  const [ { value, focus }, setState ] = useState( initialState )

  // FireFox: value as textContent ( children )
  const option = useMemo(
    () => <option value={ value } label={ value }>{ value }</option>,
    [ value ]
  )

  const content = useMemo( () => focus ? options : option, [ focus ] )

  const listener = useCallback(
    ({ type, target: { value } }) =>
    {
      switch ( type )
      {
        case 'blur' :
        case 'focus' :
          return setState(
            ({ focus, ...state }) => ({ ...state, focus: !focus })
          )

        case 'change' :
          return setState( state => ({ ...state, value }) )

        default : return
      }
    },
    []
  )

  const listeners = useMemo(
    () => events.reduce(
      ( obj, event ) => ({ ...obj, [ event ]: listener }),
      {}
    ),
    []
  )

  return { value, content, listeners }
}