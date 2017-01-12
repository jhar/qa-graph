import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, provider } from '../firebase'
import { googleAuthPopup } from '../actions/firebase'
import Title from '../components/Title'
import Main from '../components/Main'

const Root = ({ dispatch, user }) => {
  if (!user) {
    return (
      <Title
        googleAuthPopup={() => googleAuthPopup(dispatch, firebase, provider)}
      />
    )
  } else {
    return <Main />
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
