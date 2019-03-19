import { useCallback, useRef } from 'react'

export default ({ tooltipTime }) =>
{
  const { current: tooltipValid } = useRef([ 'clipboard', 'clipboard-valid' ])

  const { current: tooltipError } = useRef([ 'clipboard', 'clipboard-error' ])

  const { current: clipboard } = useRef( navigator.clipboard )

  const refTimeoutClipboard = useRef()

  const showTooltip = useCallback(
    ({ error, target }) =>
    {
      const tooltipClassName = error ? tooltipError : tooltipValid

      target.classList.add( ...tooltipClassName )

      refTimeoutClipboard.current = setTimeout(
        () =>
        {
          target.classList.remove( ...tooltipClassName )

          refTimeoutClipboard.current = null
        },
        tooltipTime
      )
    },
    []
  )

  const extractText = useCallback(
    ({ textContent }) => textContent,
    []
  )

  const writeClipboard = useCallback(
    async ({ target }) =>
    {
      const { current: timeoutClipboard } = refTimeoutClipboard

      if ( timeoutClipboard ) return

      let error = false

      try
      {
        await clipboard.writeText( extractText( target ) )
      }
      catch ( e )
      {
        error = true
      }

      showTooltip({ error, target })
    },
    []
  )

  return { writeClipboard }
}