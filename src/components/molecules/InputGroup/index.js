import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeSearchHeroName, getHeroes } from '../../../store/search/action'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

import './styles.scss'

const InputGroup = () => {
  const dispatch = useDispatch()
  const { searchHeroName } = useSelector(state => state.search)

  function handleClick () {
    dispatch(getHeroes())
  }

  return (
    <div className='inputgroup'>
      <Input type='text' placeholder='Hero name' value={searchHeroName} id='searchHeroName' name='searchHeroName' onChange={(e) => dispatch(changeSearchHeroName(e.target.value))} />
      <Button className='inputgroup__button' onClick={handleClick}>Search</Button>
    </div>
  )
}

export default InputGroup
