import { combineReducers } from 'redux'

import modalReducer from './modal/reducer'
import searchReducer from './search/reducer'

const reducers = combineReducers({
  modal: modalReducer,
  search: searchReducer
})

export default reducers
