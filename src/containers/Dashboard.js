import React from 'react'
import { connect } from 'react-redux'
import GoogleProfile from '../components/GoogleProfile'
import {
  BASE_DASHBOARD,
  OPEN_DASHBOARD,
  CLOSE_DASHBOARD
} from '../constants/animation'
import '../style/dashboard.css'

const Dashboard = ({ animate, dispatch, open, user }) => {
  const css = (
    animate ? open ? OPEN_DASHBOARD : CLOSE_DASHBOARD : BASE_DASHBOARD
  )

  return (
    <div className={css}>
      <GoogleProfile
        email={user.email}
        name={user.displayName}
        photoURL={user.photoURL}
        // TODO: add logout w/ providerId & uid
      />
      <div>Explore the graph</div>
      <div>Ask a question</div>
      <div>Boost your reputation</div>
      <div>See where you rank</div>
      <div>Read our guides</div>
      <div>Test your knowledge</div>
    </div>
  )
}

Dashboard.propTypes = {
  animate: React.PropTypes.bool.isRequired,
  open: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    animate: state.ui.dashboard.animate,
    open: state.ui.dashboard.open,
    user: state.firebase.user.providerData[0]
  }
}

export default connect(mapStateToProps)(Dashboard)
