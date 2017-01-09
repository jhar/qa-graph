import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import Root from './containers/Root'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementsByClassName('app')[0]
)
