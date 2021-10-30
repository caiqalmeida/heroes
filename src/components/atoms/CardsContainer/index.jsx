import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'

import './styles.scss'

const CardsContainer = ({ heroes }) => {
  return (
    <div className='CardsContainer'>
      {heroes.length > 0 && (
        heroes.map((hero, index) => (
          <Card key={hero.id + index} hero={hero} />
        ))
      )}
    </div>
  )
}

export default CardsContainer

CardsContainer.propTypes = {
  heroes: PropTypes.array
}
