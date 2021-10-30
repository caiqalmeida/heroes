export const openModal = () => {
  return {
    type: 'MODAL/OPEN'
  }
}

export const closeModal = () => {
  return {
    type: 'MODAL/CLOSE'
  }
}

export const setHero = (hero) => {
  return {
    type: 'MODAL/SET_SELECTED_HERO',
    payload: hero
  }
}
