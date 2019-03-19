import React from 'react'
import PropTypes from 'prop-types'
import { Field } from '../'
import { useClipboard } from '../../hooks'

export default function FieldOutput ({ output, tooltipTime = 2000, ...props })
{
  const { writeClipboard } = useClipboard({ tooltipTime })

  return (
    <Field { ...props } >
      <section>
        <output onClick={ writeClipboard }>
          { output }
        </output>
      </section>
    </Field>
  )
}

FieldOutput.propTypes = {
  output: PropTypes.string.isRequired,
  tooltipTime: PropTypes.number,
  props: PropTypes.object,
}