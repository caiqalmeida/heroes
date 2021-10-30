export const INITIAL_STATE = {
  heroes: [{}],
  searchHeroName: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH/CHANGE_SEARCH_HERO_NAME':
      return {
        ...state,
        searchHeroName: action.payload
      }
    case 'SEARCH/CHANGE_HEROES':
      return {
        ...state,
        heroes: action.payload
      }
    default:
      return state
  }
}

export default reducer
