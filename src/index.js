import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/'
import Root from './containers/Root'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementsByClassName('app')[0]
)
