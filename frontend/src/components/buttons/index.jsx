import React from 'react'
import './index.css'

const Button = ({ onClick = () => {}, children, variant, className = '' }) => {
  return (
    <button
      className={`button-container ${className} ${
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
      {children}
    </button>
  )
}

export default Button
