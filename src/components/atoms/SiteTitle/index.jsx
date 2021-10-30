import React from 'react'

import './styles.scss'

const SiteTitle = ({ text, className = '', ...props }) => {
  return (
    <h1 className={`site-title ${className}`}>{text}</h1>
  )
}

export default SiteTitle
