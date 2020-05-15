import React from 'react'
import { Link, useParams} from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  const {planetId}=useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component {planetId}
          <Link to='/dashboard'>Dashboard</Link>
          <div>
            <a href='/dashboard'>dashboard Href</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
