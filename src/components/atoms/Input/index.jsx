import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Input = ({ type = 'text', placeholder, value, name, id, className = '', ...props }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} id={id} className={`input ${className}`} {...props} />
  )
}

export default Input

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}
