import React, { PropTypes } from 'react'

const Title = ({ googleAuthPopup }) => {
  return (
    <div>
      <h2 onClick={googleAuthPopup}>
        Title Screen (click for Google Auth)
      </h2>
    </div>
  )
}

Title.propTypes = {
  googleAuthPopup: React.PropTypes.func.isRequired
}

export default Title
