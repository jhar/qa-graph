import { combineReducers } from 'redux'
import firebase from './firebase'
import three from './three'
import ui from './ui'

const reducer = combineReducers({
  firebase,
  three,
  ui
})

export default reducer
