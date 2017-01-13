import { GOOGLE_AUTH } from '../constants/actionTypes'

export const googleAuth = (dispatch, firebase, provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      dispatch({
        token: result.credential.accessToken,
        type: GOOGLE_AUTH,
        user: result.user
      })
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
    })
}
