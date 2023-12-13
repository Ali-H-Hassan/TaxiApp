import './index.css'

export default function Index({
  placeHolder,
  label = null,
  onChange = () => {},
  type = 'text',
  required = true
}) {
  return (
    <div className="input-container">
      {label && <span>{label}</span>}
      <input
        type={type}
        placeholder={placeHolder}
        className="input"
        onChange={onChange}
        required={required}
      />
    </div>
  )
}
