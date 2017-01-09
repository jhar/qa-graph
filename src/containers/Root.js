import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { googleAuthPopup } from '../firebase/index'


const Root = ({ dispatch }) => {
  return (
    <div>
      <h1 onClick={googleAuthPopup}>Google Auth</h1>
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
