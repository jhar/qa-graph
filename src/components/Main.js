import React from 'react'
import Toolbar from '../containers/Toolbar'
import Dashboard from '../containers/Dashboard'
import Leaderboard from '../containers/Leaderboard'
import '../style/main.css'

const Main = () => (
  <div className="main">
    <Toolbar />
    <Dashboard />
    <Leaderboard />
    <Information />
    <Settings />
  </div>
)

export default Main
