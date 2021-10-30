import { Provider } from 'react-redux'

import './assets/scss/global.scss'

import store from './store'

import Home from './pages/Home'
function App () {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}

export default App
