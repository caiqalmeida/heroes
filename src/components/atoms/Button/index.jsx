import React from 'react'

import './styles.scss'

const Button = ({ onClick, children, className = '', ...props }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} {...props}>{children}</button>
  )
}

export default Button
