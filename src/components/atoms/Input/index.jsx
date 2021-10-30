import React from 'react'

import './styles.scss'

const Input = ({ type = 'text', placeholder, value, name, id, className = '', ...props }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} id={id} className={`input ${className}`} {...props} />
  )
}

export default Input
