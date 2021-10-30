import React, { useEffect, useState } from 'react'

import TopBar from '../components/molecules/TopBar'
import SideBar from '../components/molecules/SideBar'
import CardsContainer from '../components/atoms/CardsContainer'
import MainContainer from '../components/atoms/MainContainer'
import Container from '../components/atoms/Container'
import Card from '../components/atoms/Card'
import DetailsModal from '../components/molecules/DetailsModal'

import { getHeroesBySearch } from '../services/api'

const Home = () => {
  const [heroes, setHeroes] = useState([])
  const [selectedHero, setSelectedHero] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchHeroName, setSearchHeroName] = useState('')

  async function getInitialHeroes () {
    const listOfHeroes = await getHeroesBySearch('Ab')
    setHeroes(listOfHeroes)
  }

  async function getSearchedHeroes () {
    const listOfHeroes = await getHeroesBySearch(searchHeroName)
    console.log('list of heroes', listOfHeroes)
    if (listOfHeroes !== undefined && listOfHeroes.length > 0) {
      setHeroes(listOfHeroes)
    }
  }

  function handleClick (hero) {
    setIsModalOpen(true)
    setSelectedHero(hero)
  }

  function closeModal () {
    setIsModalOpen(false)
  }

  useEffect(() => {
    getInitialHeroes()
  }, [])

  return (
    <div className='app'>
      <TopBar />
      <MainContainer>
        <SideBar searchHeroName={searchHeroName} setSearchHeroName={setSearchHeroName} getSearchedHeroes={getSearchedHeroes} />
        <Container className='relative'>
          <CardsContainer>
            {heroes.length > 0 && (
              heroes.map((hero) => (
                <Card key={hero.id} hero={hero} handleClick={() => handleClick(hero)} />
              ))
            )}
          </CardsContainer>
          {isModalOpen && <DetailsModal closeModal={closeModal} hero={selectedHero} />}
        </Container>
      </MainContainer>
    </div>
  )
}

export default Home
