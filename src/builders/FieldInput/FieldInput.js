import React from 'react'
import { FieldControl, Input } from '../'

export default function FieldInput ( props )
{
  return (
    <FieldControl { ...props } Control={ Input } />
  )
}