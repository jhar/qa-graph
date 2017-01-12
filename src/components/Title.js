import React, { PropTypes } from 'react'
import { GOOGLE_SIGN_IN_SRC } from '../constants/images'
import {
  TITLE_AUTHOR,
  TITLE_DESCRIPTION,
  TITLE_EMAIL,
  TITLE_HEADER,
  TITLE_VERSION
} from '../constants/text'
import '../style/title.css'

const Title = ({ googleAuthPopup }) => {
  return (
    <div className="title-view">
      <div className="title-center-container">
        <h1 className="title-header">
          {TITLE_HEADER}
        </h1>
        <h3 className="title-sub">
          {TITLE_DESCRIPTION}
        </h3>
        <img
          alt="Google Sign In Button"
          className="google-sign-in"
          onClick={googleAuthPopup}
          src={GOOGLE_SIGN_IN_SRC}
        />
      </div>
      <div className="title-lower-container">
        <span className="title-small">Version {TITLE_VERSION}</span><br/>
        <span className="title-small">Written by {TITLE_AUTHOR}</span><br/>
        <span className="title-small">{TITLE_EMAIL}</span>
      </div>
    </div>
  )
}

Title.propTypes = {
  googleAuthPopup: React.PropTypes.func.isRequired
}

export default Title
