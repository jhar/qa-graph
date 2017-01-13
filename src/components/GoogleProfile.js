import React from 'react'
import '../style/googleProfile.css'

const GoogleProfile = ({ email, name, photoURL }) => {
  return (
    <div className="gp-container">
      <div className="gp-photo-container">
        <img
          alt="Google Profile Photo"
          className="gp-photo"
          src={photoURL}
        />
      </div>
      <div className="gp-text-container">
        <h1 className="gp-name">
          {name}
        </h1>
        <span className="gp-email">
          {email}
        </span>
      </div>
    </div>
  )
}

GoogleProfile.propTypes = {
  email: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string
}

export default GoogleProfile
