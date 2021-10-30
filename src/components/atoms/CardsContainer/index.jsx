import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const CardsContainer = ({ children }) => {
  return (
    <div className='CardsContainer'>
      {children}
    </div>
  )
}

export default CardsContainer

CardsContainer.propTypes = {
  children: PropTypes.array
}
