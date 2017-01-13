import React, { PropTypes } from 'react'

const TxtBtn = ({ action, css, txt }) => {
  return (
    <div className={css} onClick={action}>
      {txt}
    </div>
  )
}

Toolbar.propTypes = {
  action: React.PropTypes.func.isRequired,
  css: React.PropTypes.string.isRequired,
  txt: React.PropTypes.string.isRequired
}

export default TxtBtn
