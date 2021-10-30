import React from 'react'

import './styles.scss'

const Title = ({ className = '', children, ...props }) => {
  return (
    <h1 className={`title ${className}`} {...props}>{children}</h1>
  )
}

export default Title
