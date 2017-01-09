import React, { PropTypes } from 'react'

const Main = ({ dispatch, user }) => {
  return (
    <div>
      <h2>Main View</h2>
      <h3>{user.displayName}</h3>
      <h4>{user.email}</h4>
    </div>
  )
}

Main.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired
}

export default Main
