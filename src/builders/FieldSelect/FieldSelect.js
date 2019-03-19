import React from 'react'
import { FieldControl, Select } from '../'

export default function FieldSelect ( props )
{
  return (
    <FieldControl { ...props } Control={ Select } />
  )
}