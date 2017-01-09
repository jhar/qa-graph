import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, provider } from '../firebase/index'
import { googleAuthPopup } from '../firebase/actions'
import Title from './Title'
import Main from './Main'

console.log('firebase: ' + firebase)
console.log('provider: ' + provider)
console.log('google: ' + googleAuthPopup)

const Root = ({ dispatch, user }) => {
  if (!user) {
    return (
      <Title
        dispatch={dispatch}
        googleAuthPopup={() => {
          googleAuthPopup(dispatch, firebase, provider)
        }}
      />
    )
  } else {
    return <Main dispatch={dispatch} user={user} />
  }
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
