import { GOOGLE_AUTH_POPUP } from './actionTypes'

export const googleAuth = (token, user) => ({
  token,
  type: GOOGLE_AUTH_POPUP,
  user
})

export const googleAuthPopup = (firebase, provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result.credential.accessToken)
      console.log(result.user)
      return {
        token: result.credential.accessToken,
        user: result.user
      }
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
    })
}
