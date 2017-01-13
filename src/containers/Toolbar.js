import React from 'react'
import TxtBtn from '../components/TxtBtn'
import { connect } from 'react-redux'
import { CIRCLE_ICON_SRC } from '../constants/images'
import { animateCss } from '../actions/ui'
import '../style/toolbar.css'

const Toolbar = ({ dispatch, ui }) => {
  return (
    <div className="toolbar">
      <div className="dash-btn-container">
        <TxtBtn
          action={() => animateCss(dispatch, 'dashboard')}
          css={'dash-btn'}
          txt={ui.dashboard.open ? 'Close Dashboard' : 'Open Dashboard'}
        />
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  ui: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(mapStateToProps)(Toolbar)
