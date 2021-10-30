import React from 'react'

import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import InputGroup from '../InputGroup'

import './styles.scss'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <Title className='darkGrey alignCenter'>Search for a <Text className='blue inline'>hero</Text></Title>
      <InputGroup />
    </div>
  )
}

export default SearchBar
