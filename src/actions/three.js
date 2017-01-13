import { CONTROL_SCENE } from '../constants/actionTypes'

export const controlScene = (dispatch, scene, animate, ctrl) => {
  if (animate) {
    ctrl()
  } else {
    cancelAnimationFrame(ctrl())
  }

  dispatch({ animate, scene, type: CONTROL_SCENE })
}
