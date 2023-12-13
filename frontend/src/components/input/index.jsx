import './index.css'

export default function Index({
  placeHolder,
  label = null,
  value = '',
  onChange = () => {},
  type = 'text',
  required = true,
  name
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
        required={required}
        name={name}
      />
    </div>
  )
}