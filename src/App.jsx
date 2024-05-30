import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Project from './components/Projects/Project'
import Connect from './components/Connect/Connect'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Skills />
      <Project />
      <Connect />
    </div>
  )
}

export default App
