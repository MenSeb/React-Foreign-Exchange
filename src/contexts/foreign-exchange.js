import React, { createContext, useMemo } from 'react'
import { useFetch } from '../hooks';
import { FETCH, TRANSITION, COMPONENTS } from '../constants'
import { ForeignTransitions } from '../components'

const ForeignExchangeContext = createContext()

const {
  Provider,
  Consumer: ForeignExchangeConsumer
} = ForeignExchangeContext

function ForeignExchangeProvider ( props )
{
  const { data, error, loading } = useFetch( FETCH )

  const transitions = useMemo(
    () => ({
      data: !!data,
      error: !!error,
      loading,
    }),
    [ data, error, loading ]
  )

  return (
    <Provider { ...props } value={{ data, error, loading }}>
      <main id='ForeignExchange' className='wrapper'>
        <ForeignTransitions
          components={ COMPONENTS }
          transition={ TRANSITION }
          transitions={ transitions }
        />
      </main>
    </Provider>
  )
}

export {
  ForeignExchangeConsumer,
  ForeignExchangeContext,
  ForeignExchangeProvider,
}