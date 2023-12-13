import './index.css'

/**
 * message component represents the message when sent in the echat
 *
 * @param position is the message on the left or right side
 * @returns
 *
 * ```jsx
 * <Message position={'right'} time={'12:30 am'}>text</Message>
 * ```
 */
export default function Index({ children, position, time }) {
  return (
    <div className={`msg-container flex-start ${position === 'right' && 'flex-end'}`}>
      <div className={`msg ${position === 'right' ? 'right' : 'left'}`}>
        <div className={`msg-text`}>{children}</div>
        <span className={`msg-time ${position === 'right' ? 'flex-start' : 'flex-end'}`}>
          {time}
        </span>
      </div>
    </div>
  )
}
