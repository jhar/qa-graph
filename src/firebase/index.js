import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAkKsp_mwumCS0NhCzelFtRUk3A9uUsxUs",
  authDomain: "qa-graph.firebaseapp.com",
  databaseURL: "https://qa-graph.firebaseio.com",
  storageBucket: "qa-graph.appspot.com",
  messagingSenderId: "302866480782"
})

const provider = new firebase.auth.GoogleAuthProvider()

export const googleAuthPopup = () => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result.credential.accessToken)
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
    })
}
