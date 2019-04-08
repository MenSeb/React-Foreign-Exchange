import React from 'react'
import { ForeignExchangeProvider } from '../contexts/foreign-exchange'

export default function App ()
{
  return (
    <div className='App'>

      <ForeignExchangeProvider />

    </div>
  )
}