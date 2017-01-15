import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT
} from './constants'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return {
        ...state,
        token: action.token,
        user: action.user
      }
    case GOOGLE_SIGN_OUT:
      return {
        ...state,
        token: undefined,
        user: undefined
      }
    default:
      return state
  }
}

export default reducer
