import React from 'react'
import Toolbar from '../containers/Toolbar'
import Dashboard from '../containers/Dashboard'
import '../style/main.css'

const Main = () => (
  <div className="main">
    <Toolbar />
    <Dashboard />
  </div>
)

export default Main
