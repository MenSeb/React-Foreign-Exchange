import React, { useCallback, useMemo, useRef } from 'react'
import { Button, Field, FieldInput, FieldOutput, FieldSelect } from '../../builders'
import { useConversion, useCurrency, useForeignExchange, useForm } from '../../hooks'

export default function ForeignData ()
{
  const { data: { base, rates } } = useForeignExchange()

  const { current: amount } = useRef({
    type: 'text',
    autoComplete: 'off',
    placeholder: 'Amount...',
    validation: /^([1-9]\d*|0?)((\.|,)\d{0,2})?$/
  })

  const options = useMemo(
    () => Object.keys( rates ).sort().map(
      code => (
        <option value={ code } label={ code } key={ code }>
          { code }
        </option>
      )
    ),
    [ rates ]
  )

  const { refForm, getFormData } = useForm([ 'amount', 'from', 'into' ])

  const { convert, ...conversion } = useConversion({ base, rates })

  const { formatCurrency } = useCurrency()

  const submit = useCallback(
    event =>
    {
      event.preventDefault()

      const data = getFormData()

      convert( data )
    },
    [],
  )

  const currency = useMemo(
    () => formatCurrency( conversion ),
    [ conversion ]
  )

  return (
    <form id='ForeignData' ref={ refForm }>
      <Field legend='Enter amount' className='animated-left'>
        <FieldInput id='amount' label='Amount' control={ amount } />
      </Field>

      <Field legend='Set currencies' className='animated-right'>
        <div className='currencies'>
          <FieldSelect id='from' label='From' control={{ options }} />
          <FieldSelect id='into' label='Into' control={{ options }} />
        </div>
      </Field>

      <Button className='animated-scale' onClick={ submit }>
        Convert
      </Button>

      <FieldOutput
        legend='Get conversion'
        output={ currency }
        className='conversion animated-bottom'
      />
    </form>
  )
}