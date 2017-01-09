const SOMETHING = 'SOMETHING'

const initial = {}

export const rootReducer = (state = initial, action) => {
  switch (action.type) {
    case SOMETHING:
      return { ...state, something: true }
    default:
      return state
  }
}
