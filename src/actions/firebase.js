import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT
} from '../constants/actionTypes'

export const googleSignIn = (dispatch, firebase, provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      dispatch({
        token: result.credential.accessToken,
        type: GOOGLE_SIGN_IN,
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

export const googleSignOut = (dispatch, firebase) => {
  firebase.auth().signOut()
    .then(function() {
      dispatch({ type: GOOGLE_SIGN_OUT })
    }, function(error) {
      console.log(error)
      // TODO: Error action
    })
}
