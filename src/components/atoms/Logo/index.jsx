import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import LogoBlack from '../../../assets/img/logo-black.png'
import LogoWhite from '../../../assets/img/logo-white.png'

const Logo = ({ variant = 'white' }) => {
  let logo
  if (variant === 'white') {
    logo = LogoWhite
  } else if (variant === 'black') {
    logo = LogoBlack
  }

  return (
    <img src={logo} className='image' alt='Logo' />
  )
}

export default Logo

Logo.propTypes = {
  variant: PropTypes.string
}
