import React from 'react'
import './index.css'

const Button = ({ onClick = () => {}, label, variant }) => {
  return (
    <button
      className={`button-container ${
        variant === 'primary'
          ? 'primary'
          : variant === 'secondary'
            ? 'secondary'
            : variant === 'danger'
              ? 'danger'
              : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
