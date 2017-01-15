import firebase from 'firebase'
import {
  googleSignIn,
  googleSignOut
} from './actions'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from './constants'

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
})

const provider = new firebase.auth.GoogleAuthProvider()

export const googleSignIn = (dispatch, firebase, provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => googleSignIn(result))
    .catch(error => {
      // TODO: Error action
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
    })
}

export const googleSignOut = (dispatch, firebase) => {
  firebase.auth().signOut()
    .then(function() {
      googleSignOut()
    }, function(error) {
      // TODO: Error action
      console.log(error)
    })
}
