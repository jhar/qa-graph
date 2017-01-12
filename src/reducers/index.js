import { combineReducers } from 'redux'
import firebase from './firebase'
import three from './three'

const reducer = combineReducers({
  firebase,
  three
})

export default reducer
