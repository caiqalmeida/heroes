import React from 'react'

import './styles.scss'

import SiteTitle from '../../atoms/SiteTitle'
import Logo from '../../atoms/Logo'

const TopBar = () => {
  return (
    <div className='topbar'>
      <Logo />
      <SiteTitle text='Heroes' />
    </div>
  )
}

export default TopBar
