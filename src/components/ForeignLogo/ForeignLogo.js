import React from 'react'

export default function ForeignLogo ( props )
{
  return (
    <img
      { ...props }
      src='logo.svg'
      className='ForeignLogo'
      alt='Foreign Exchange Logo'
    />
  )
}