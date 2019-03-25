import React, { useMemo } from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

export default function ForeignTransitions ({ components, transition, transitions })
{
  return useMemo(
    () => components.map(
      ([ name, Component ]) => (
        <Transition { ...transition } in={ transitions[ name ] } key={ name }>
        {
          state => (
            <div className={ `layout animation animation-${ state }` }>
              <h2 className='title animated-top'>Foreign Exchange</h2>
              <Component />
            </div>
          )
        }
        </Transition>
      )
    ),
    [ transitions ]
  )
}

ForeignTransitions.propTypes = {
  components: PropTypes.arrayOf( PropTypes.array ).isRequired,
  transition: PropTypes.object.isRequired,
  transitions: PropTypes.object.isRequired,
}