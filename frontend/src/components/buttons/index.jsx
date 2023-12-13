import React from 'react'
import './index.css'

const Button = ({ onClick = () => {}, children, variant }) => {
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
      {children}
    </button>
  )
}

export default Button
