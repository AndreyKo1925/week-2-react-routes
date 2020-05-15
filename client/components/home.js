import React from 'react'
// import React, { useState } from 'react'
import {  Switch, Route } from 'react-router-dom'
import Header from './header'
import Main from './main'
import Profile from './profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path='/dashboard/main' component={()=><Main />} />
            <Route exact path='/dashboard/profile/:username' component={()=><Profile />} />
            <Route exact path='/dashboard/' component={()=><Dashboard />} />
            {/* <Link to='/dashboard'>Dashboard7</Link> */}
          </Switch>{' '}          
        </div>{' '}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
