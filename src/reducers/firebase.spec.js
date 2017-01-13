import deepFreeze from 'deep-freeze'
import firebase from './firebase'
import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT
} from '../constants/actionTypes'

const potentiallyMutableState = {
  firebase: {
    token: 'adsfjasdklfjef',
    user: {
      name: 'steve',
      email: 'baloney@sandwich.com'
    }
  },
  three: {
    something: {
      is: true,
      not: false
    }
  },
  ui: {
    dashboard: {
      animate: true,
      open: true
    }
  }
}

deepFreeze(potentiallyMutableState)
deepFreeze(GOOGLE_SIGN_IN)
deepFreeze(GOOGLE_SIGN_OUT)

const passingTest = true

describe('The firebase reducer', () => {
  it('works with Jest', () => {
    expect(passingTest).toBeTruthy()
  })
})
