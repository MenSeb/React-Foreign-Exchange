import React from 'react'

export default function SvgDefs ()
{
  return (
    <svg className='SvgDefs' aria-hidden={ true }>
      <defs>
        <circle x='0' y='0' r='9' id='foreign-logo-border' />
        <circle x='0' y='0' r='8' id='foreign-logo-background' />
        <path id='foreign-logo-dollar' d='
          M0 1 h-2
          a 2.5 2.5 0 0 1 0 -5
          h1 v-2 h2 v2 h2.5 v2 h-5.5
          a .5 .5 0 0 0 0 1
          h4
          a 2.5 2.5 0 0 1 0 5 h-1
          v2 h-2 v-2 h-2.5 v-2 h5.5
          a .5 .5 0 0 0 0 -1 z'
        />
        <symbol id='foreign-logo' viewBox='-10 -10 20 20'>
          <use xlinkHref='#foreign-logo-border' />
          <use xlinkHref='#foreign-logo-background' />
          <use xlinkHref='#foreign-logo-dollar' />
        </symbol>
      </defs>
    </svg>
  )
}