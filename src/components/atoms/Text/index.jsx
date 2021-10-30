import React from 'react'

import './styles.scss'

const Text = ({ children, className = '' }) => {
  return <p className={`text ${className}`}>{children}</p>
}

export default Text
