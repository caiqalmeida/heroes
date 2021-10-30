import React from 'react'

import './styles.scss'

import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const SideBar = ({ searchHeroName, setSearchHeroName, getSearchedHeroes }) => {
  return (
    <div className='sidebar'>
      <Title className='darkGrey alignCenter'>Search for a <Text className='blue inline'>hero</Text></Title>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
        <Input type='text' placeholder='Hero name' value={searchHeroName} id='searchHeroName' name='searchHeroName' onChange={(e) => setSearchHeroName(e.target.value)} />
        <Button style={{ marginLeft: '-10px' }} onClick={getSearchedHeroes}>Search</Button>
      </div>
    </div>
  )
}

export default SideBar
