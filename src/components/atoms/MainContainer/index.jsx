import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const MainContainer = ({ children, className = '' }) => {
  return (
    <div className={`main-container ${className}`}>
      {children}
    </div>
  )
}

export default MainContainer

MainContainer.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
}
