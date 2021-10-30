import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import TopBar from '../components/molecules/TopBar'
import SideBar from '../components/molecules/SideBar'
import CardsContainer from '../components/atoms/CardsContainer'
import MainContainer from '../components/atoms/MainContainer'
import Container from '../components/atoms/Container'
import Card from '../components/atoms/Card'
import DetailsModal from '../components/molecules/DetailsModal'

import { getInitialHeroes } from '../store/search/action'

const Home = () => {
  const { isModalOpen } = useSelector(state => state.modal)
  const { heroes } = useSelector(state => state.search)

  const dispatch = useDispatch()

  async function getHeroesOnLoad () {
    dispatch(getInitialHeroes())
  }

  /* eslint-disable */
  useEffect(() => {
    getHeroesOnLoad()
  }, [])

  return (
    <div className='app'>
      <TopBar />
      <MainContainer>
        <SideBar />
        <Container className='relative'>
          <CardsContainer>
            {heroes.length > 0 && (
              heroes.map((hero, index) => (
                <Card key={hero.id + index} hero={hero} />
              ))
            )}
          </CardsContainer>
          {isModalOpen && <DetailsModal />}
        </Container>
      </MainContainer>
    </div>
  )
}

export default Home
