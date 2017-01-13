import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, provider } from '../firebase'
import { googleAuth } from '../actions/firebase'
import { controlScene } from '../actions/three'
import startTitle from '../three/title'
import startMain from '../three/main'
import Title from '../components/Title'
import Main from '../components/Main'

const Root = ({ dispatch, user }) => {
  return (
    user ? (
      // controlScene(dispatch, 'main', true, startMain),
      <Main />
    ) : (
      controlScene(dispatch, 'title', true, startTitle),
      <Title googleAuth={() => googleAuth(dispatch, firebase, provider)} />
    )
  )
}

Root.propTypes = {
  user: React.PropTypes.object
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.firebase.user
  }
}

export default connect(mapStateToProps)(Root)
