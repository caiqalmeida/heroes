import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/organisms/Header'
import HeroesList from '../../components/organisms/HeroesList'

import { getInitialHeroes } from '../../store/search/action'
import { closeModal } from '../../store/modal/action'

import './styles.scss'

const Home = () => {
  const { isModalOpen, hero } = useSelector(state => state.modal)
  const { heroes } = useSelector(state => state.search)

  const dispatch = useDispatch()

  function handleCloseModal () {
    dispatch(closeModal())
  }

  async function getHeroesOnLoad () {
    dispatch(getInitialHeroes())
  }

  /* eslint-disable */
  useEffect(() => {
    getHeroesOnLoad()
  }, [])

  return (
    <div className='home-page'>
      <Header />
      <HeroesList heroes={heroes} isModalOpen={isModalOpen} hero={hero} handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default Home
