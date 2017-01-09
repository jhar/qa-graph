import { GOOGLE_AUTH_POPUP } from './actionTypes'

const firebase = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_AUTH_POPUP:
      return {
        ...state,
        token: action.token,
        user: action.user
      }
    default:
      return state
  }
}

export default firebase
