import { ANIMATE_CSS } from '../constants/actionTypes'

const ui = (state = {}, action) => {
  switch (action.type) {
    case ANIMATE_CSS:
      return {
        ...state,
        ui: {
          ...state.ui,
          [action.target]: {
            animate: true,
            open: !state.ui[action.target].open
          }
        }
      }
    default:
      return state
  }
}

export default ui
