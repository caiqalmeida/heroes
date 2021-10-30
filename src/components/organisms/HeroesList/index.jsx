import React from 'react'

import Container from '../../atoms/Container'
import CardsContainer from '../../atoms/CardsContainer'
import DetailsModal from '../../molecules/DetailsModal'

import './styles.scss'

const HeroesList = ({ heroes, isModalOpen, hero, handleCloseModal }) => {
  return (
    <main className='heroes-list'>
      <Container className='column'>
        <Container className='heroes-list__container relative'>
          <CardsContainer heroes={heroes} />
          {isModalOpen && <DetailsModal closeModal={handleCloseModal} hero={hero} />}
        </Container>
      </Container>
    </main>
  )
}

export default HeroesList
