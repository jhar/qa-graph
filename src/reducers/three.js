import { CONTROL_SCENE } from '../constants/actionTypes'

const three = (state = {}, action) => {
  switch (action.type) {
    case CONTROL_SCENE:
      return {
        ...state,
        animating: {
          ...state.animating,
          [action.name]: action.animating
        }
      }
    default:
      return state
  }
}

export default three
