import React from 'react'
import TxtBtn from '../components/TxtBtn'
import { connect } from 'react-redux'
import { CIRCLE_ICON_SRC } from '../constants/images'
import { animateCss } from '../actions/ui'
import '../style/toolbar.css'

const Toolbar = ({ dispatch, ui }) => {
  return (
    <div className="toolbar">
      <div className="main-bar">
        <div className="logo">
          <img
            className="circle-icon"
            src={CIRCLE_ICON_SRC}
          />
        </div>
        <div className="search">
          Search
        </div>
        <div className="clock">
          Clock
        </div>
        <div className="name">
          Sographes
        </div>
        <div className="dash-btn-container">
          <TxtBtn
            action={() => animateCss(dispatch, 'dashboard')}
            css={'dash-btn'}
            txt={'Dashboard'}
          />
        </div>
        <div className="leader-btn-container">
          <TxtBtn
            action={() => animateCss(dispatch, 'leaderboard')}
            css={'leader-btn'}
            txt={'Leaderboard'}
          />
        </div>
        <div className="info-btn-container">
          <TxtBtn
            action={() => animateCss(dispatch, 'information')}
            css={'info-btn'}
            txt={'Information'}
          />
        </div>
        <div className="settings-btn-container">
          Gear
        </div>
      </div>
      <div className="sub-bar">
        <div className="section-title">
          Section
        </div>
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  ui: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Toolbar)
