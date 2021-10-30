import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container

Container.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
}
