import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Text = ({ children, className = '' }) => {
  return <p className={`text ${className}`}>{children}</p>
}

export default Text

Text.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}
