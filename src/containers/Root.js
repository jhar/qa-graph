import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, provider } from '../firebase/index'
import { googleAuthPopup } from '../firebase/actions'
import Title from './Title'

const Root = ({ dispatch }) => {
  return (
    <div>
      <h1>Root</h1>
      <Title
        dispatch={dispatch}
        googleAuthPopup={() => googleAuthPopup(firebase, provider)}
      />
    </div>
  )
}

Root.propTypes = {
  // Nothing for now
}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Root)
