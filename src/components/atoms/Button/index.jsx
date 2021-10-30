import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

const Button = ({ onClick, children, className = '', ...props }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} {...props}>{children}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  className: PropTypes.string
}

export default Button
