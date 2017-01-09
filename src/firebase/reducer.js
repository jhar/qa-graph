import { GOOGLE_AUTH } from './actionTypes'

const firebase = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_AUTH:
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
