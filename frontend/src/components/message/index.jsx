import './index.css'

export default function Index({ children, position }) {
  return (
    <div className={`msg-container flex-start ${position === 'right' && 'flex-end'}`}>
      <div className={`msg ${position === 'right' ? 'right' : 'left'}`}>
        <div className={`msg-text`}>{children}</div>
        <span className={`msg-time ${position === 'right' ? 'flex-start' : 'flex-end'}`}>
          12:33 am
        </span>
      </div>
    </div>
  )
}
