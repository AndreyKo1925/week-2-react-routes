import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main">
      <div id="title">Dashboard</div>

      <div>
        <Link to='/dashboard/profile/743160e0-31a2-4bb8-928a-3da7ee2cb896'>Go To Profile</Link>
        <Link to='/dashboard/main'>Go To Main</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
