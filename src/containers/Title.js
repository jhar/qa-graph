import React, { PropTypes } from 'react'

const Title = ({ dispatch, googleAuthPopup }) => {
  return (
    <div>
      <h1>Title Screen</h1>
      <button onClick={googleAuthPopup}>Google Auth</button>
    </div>
  )
}

Title.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  googleAuthPopup: React.PropTypes.func.isRequired
}

export default Title
