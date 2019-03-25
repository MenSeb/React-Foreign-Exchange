import React from 'react'
import { Button, FieldOutput } from '../../builders'
import { useForeignExchange } from '../../hooks';

export default function ForeignError ()
{
  const { error, reload } = useForeignExchange()

  return (
    <form id='ForeignError'>
      <FieldOutput
        legend='Error description'
        output='Error while loading'
        className='animated-left'
      />

      <FieldOutput
        legend='Error solution'
        output='Reload with the button below'
        className='animated-right'
      />

      <Button className='animated-scale' onClick={ reload }>
        Reload
      </Button>

      <FieldOutput
        legend='Error details'
        output={ `${ error }` }
        className='animated-bottom'
      />
    </form>
  )
}