import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Title = ({ className = '', children, ...props }) => {
  return (
    <h1 className={`title ${className}`} {...props}>{children}</h1>
  )
}

export default Title

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}
