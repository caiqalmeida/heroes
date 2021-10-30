import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeSearchHeroName, getHeroes } from '../../../store/search/action'

import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

import './styles.scss'

const SideBar = () => {
  const dispatch = useDispatch()
  const { searchHeroName } = useSelector(state => state.search)

  function handleClick () {
    dispatch(getHeroes())
  }

  return (
    <div className='sidebar'>
      <Title className='darkGrey alignCenter'>Search for a <Text className='blue inline'>hero</Text></Title>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
        <Input type='text' placeholder='Hero name' value={searchHeroName} id='searchHeroName' name='searchHeroName' onChange={(e) => dispatch(changeSearchHeroName(e.target.value))} />
        <Button style={{ marginLeft: '-10px' }} onClick={handleClick}>Search</Button>
      </div>
    </div>
  )
}

export default SideBar
