import React from 'react'

import './styles.scss'

const Main = ({ children, className = '' }) => {
  return (
    <div className={`main-container ${className}`}>
      {children}
    </div>
  )
}

export default Main
