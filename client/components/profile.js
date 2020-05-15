import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Main = () => {
  const { username } = useParams()
  return (
    <div className="profile">
      <div id="title">Profile</div>
      <div id="username">{username}</div>
      <div>
        <Link to='/dashboard/main'>Go To Mine</Link>
        <Link to='/dashboard'>Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
