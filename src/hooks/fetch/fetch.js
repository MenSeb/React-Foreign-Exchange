import { useEffect, useState, useCallback, useRef } from 'react';

export default ({ url, endpoint, init, key, lifetime, delay, raw = false, save = true }) =>
{
  const { current: errorMessage } = useRef( 'Error trying to get ressources' )

  const { current: initialState } = useRef({ loading: true })

  const [ { data, error, loading }, setFetchState ] = useState(
    () =>
    {
      const item = localStorage.getItem( key )

      if ( item )
      {
        const state = { data: item, loading: false }

        if ( raw ) return state

        const obj = JSON.parse( item )

        const { timeStampFetch, ...data } = obj

        const timeDifference = new Date() - new Date( timeStampFetch )

        if ( timeDifference < lifetime ) return { ...state, data }
      }

      return initialState
    }
  )

  const saveData = useCallback(
    data => setTimeout(
      () => setFetchState({
        ...data,
        loading: false
      }),
      delay
    ),
    [ delay ]
  )

  const fetchData = useCallback(
    () => ( async () =>
    {
      try
      {
        const response = await fetch( `${ url }/${ endpoint }`, init )

        const data = await response.json()

        const { ok } = response

        const { error } = data

        if ( !ok || error ) return saveData({ error: error || errorMessage })

        saveData({ data })

        if ( save )
        {
          localStorage.setItem(
            key,
            JSON.stringify({
              ...data,
              timeStampFetch: new Date()
            })
          )
        }
      }
      catch ( error )
      {
        saveData({ error })
      }
    })(),
    [ url, endpoint, init ]
  )

  const reload = useCallback(
    () =>
    {
      setFetchState( initialState )

      fetchData()
    },
    []
  )

  useEffect(
    () =>
    {
      if ( !data ) fetchData()
    },
    []
  )

  return { data, error, loading, reload }
}