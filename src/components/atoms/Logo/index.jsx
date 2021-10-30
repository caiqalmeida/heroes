import React from 'react'

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
