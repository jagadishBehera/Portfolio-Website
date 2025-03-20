import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Experiance from './components/Experiance'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experiance />
    <Contact />
    </div>
    <Toaster />
    </>
  )
}

export default App