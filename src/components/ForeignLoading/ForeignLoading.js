import React from 'react'
import { ForeignLogo } from '../'

export default function ForeignLoading ()
{
  return (
    <section id='ForeignLoading'>

      <div className='loader'>
        <div className='slot animated-left' />

        <div className='dollar animated-fall'>
          <ForeignLogo className='animated-scale' />
        </div>

        <div className='slot animated-right' />
      </div>

      <p className='animated-bottom'>Loading exchange rates</p>
    </section>
  )
}