import React from 'react'
import { ForeignExchangeProvider } from '../contexts/foreign-exchange'
import SvgDefs from '../builders'

export default function App ()
{
  return (
    <div className='App'>

      <SvgDefs />

      <ForeignExchangeProvider />

    </div>
  )
}