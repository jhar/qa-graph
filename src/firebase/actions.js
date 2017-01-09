import { GOOGLE_AUTH } from './actionTypes'

const googleAuth = (token, user) => ({
  token,
  type: GOOGLE_AUTH,
  user
})

export const googleAuthPopup = (dispatch, firebase, provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      dispatch(googleAuth(result.credential.accessToken, result.user))
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
    })
}
