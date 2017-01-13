import { ANIMATE_CSS } from '../constants/actionTypes'

const initial = {
  dashboard: {
    animate: false,
    open: false
  }
}

const ui = (state = initial, action) => {
  switch (action.type) {
    case ANIMATE_CSS:
      return {
        ...state,
        [action.target]: {
          animate: true,
          open: !state[action.target].open
        }
      }
    default:
      return state
  }
}

export default ui
