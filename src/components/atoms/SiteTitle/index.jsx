import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const SiteTitle = ({ text, className = '', ...props }) => {
  return (
    <h1 className={`site-title ${className}`}>{text}</h1>
  )
}

export default SiteTitle

SiteTitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
