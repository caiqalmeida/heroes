export const INITIAL_STATE = {
  isModalOpen: false,
  hero: null
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MODAL/OPEN':
      return {
        ...state,
        isModalOpen: true
      }
    case 'MODAL/CLOSE':
      return {
        ...state,
        isModalOpen: false
      }
    case 'MODAL/SET_SELECTED_HERO':
      return {
        ...state,
        hero: action.payload
      }
    default:
      return state
  }
}

export default reducer
