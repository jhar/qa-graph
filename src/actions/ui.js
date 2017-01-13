import {
  ANIMATE_CSS
} from '../constants/actionTypes'

export const animateCss = (dispatch, target) => {
  dispatch({ target, type: ANIMATE_CSS })
}
