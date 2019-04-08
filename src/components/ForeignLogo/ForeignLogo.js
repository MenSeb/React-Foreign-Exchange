import React from 'react'

export default function ForeignLogo ( props )
{
  return (
    <img
      { ...props }
      src='logo.svg'
      alt='Foreign Exchange Logo'
    />
  )
}