import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, provider } from '../firebase'
import { googleSignin } from '../actions/firebase'
import { controlScene } from '../actions/three'
import startTitle from '../three/title'
import startMain from '../three/main'
import Title from '../components/Title'
import Main from '../components/Main'

const App = ({ dispatch, user }) => {
  if (user) {
    // controlScene(dispatch, 'main', true, startMain),
    return <Main />
  } else {
    controlScene(dispatch, 'title', true, startTitle),
    return <Title googleSignIn={() => googleSignIn(dispatch, firebase, provider)} />
  }
}

App.propTypes = {
  user: React.PropTypes.object
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.firebase.user
  }
}

export default connect(mapStateToProps)(App)
