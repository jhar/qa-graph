import { THREE_INIT } from '../constants/actionTypes'

const three = (state = {}, action) => {
  switch (action.type) {
    case THREE_INIT:
      return {
        ...state,
        init: true
      }
    default:
      return state
  }
}

export default three
