import './index.css'

export default function Index({
  placeHolder,
  label = null,
  value = '',
  onChange = () => {},
  onClick = () => {},
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
        value={value}
        onChange={onChange}
        onClick={onClick}
        required={required}
      />
    </div>
  )
}
