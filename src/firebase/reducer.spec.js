import reducer from './reducer'
import deepFreeze from 'deep-freeze'

const maybeMutableState = {
  firebase: {
    token: 'adsfjasdklfjef',
    user: {
      name: 'steve',
      email: 'baloney@sandwich.com'
    }
  }
}

const GOOGLE_SIGN_IN = {
  token: 'askdjfalskdjf',
  type: 'GOOGLE_SIGN_IN',
  user: 'justin'
}

const GOOGLE_SIGN_OUT = {
  type: 'GOOGLE_SIGN_OUT'
}

deepFreeze(maybeMutableState)
deepFreeze(GOOGLE_SIGN_IN)
deepFreeze(GOOGLE_SIGN_OUT)

describe('Deep Freeze', () => {
  it('will not let me mutate a frozen object', () => {
    function hamSandwich(obj) {
      obj.firebase.user.name = 'ham sandwich'
    }
    expect(() => {
      hamSandwich(maybeMutableState)
    }).toThrow()
  })
})

describe('The firebase reducer', () => {
  it('works with Jest', () => {
    const passingTest = true
    expect(passingTest).toBeTruthy()
  })

  it('can recognize the same state object', () => {
    expect(maybeMutableState).toBe(maybeMutableState)
  })

  it('does not mutate state on sign in', () => {
    expect(() => {
      reducer(maybeMutableState, GOOGLE_SIGN_IN)
    }).not.toBe(maybeMutableState)
  })

  it('does not mutate state on sign out', () => {
    expect(() => {
      reducer(maybeMutableState, GOOGLE_SIGN_OUT)
    }).not.toBe(maybeMutableState)
  })

  const newState = reducer(maybeMutableState, GOOGLE_SIGN_OUT)

  it('will leave the user undefined after signing out', () => {
    expect(newState.user).toBeUndefined()
  })

  const newNewState = reducer(newState, GOOGLE_SIGN_IN)

  it('can immediately sign me back in with correct values', () => {
    expect(newNewState.user).toEqual('justin')
  })
})
