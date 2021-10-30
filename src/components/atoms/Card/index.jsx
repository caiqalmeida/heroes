import React from 'react'

import './styles.scss'

import Text from '../Text'

const Card = ({ hero, handleClick }) => {
  return (
    <div className='card' onClick={handleClick}>
      <img className='card__img' src={hero?.image?.url} alt={hero?.name} />
      <footer className='card__footer'>
        <Text className='darkGrey alignCenter'>{hero?.name}</Text>
      </footer>
    </div>
  )
}

export default Card
