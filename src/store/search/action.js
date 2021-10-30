import { getHeroesBySearch } from '../../services/api'

export const changeSearchHeroName = (searchHeroName) => {
  return {
    type: 'SEARCH/CHANGE_SEARCH_HERO_NAME',
    payload: searchHeroName
  }
}

export const changeHeroes = (heroes) => {
  return {
    type: 'SEARCH/CHANGE_HEROES',
    payload: heroes
  }
}

export const getInitialHeroes = () => {
  return async function (dispatch) {
    try {
      const response = await getHeroesBySearch('Ab')
      if (response.data.error) {
        throw new Error()
      }
      dispatch(changeHeroes(response?.data?.results))
    } catch (error) {
      console.error('Error :', error)
    }
  }
}

export const getHeroes = () => {
  return async function (dispatch, getState) {
    try {
      const { search } = getState()
      console.log('search', search.searchHeroName)
      const response = await getHeroesBySearch(search.searchHeroName)
      if (response.data.error) {
        throw new Error()
      }
      dispatch(changeHeroes(response?.data?.results))
    } catch (error) {
      console.error('Error :', error)
    }
  }
}
