import React from 'react'
import { useDispatch } from 'react-redux'

import { openModal, setHero } from '../../../store/modal/action'
import Text from '../Text'
import './styles.scss'

// handleClick
const Card = ({ hero }) => {
  const dispatch = useDispatch()

  function handleClick () {
    dispatch(openModal())
    dispatch(setHero(hero))
  }

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
