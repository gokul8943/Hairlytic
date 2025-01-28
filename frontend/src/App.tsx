import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
     <Navbar />
    </div>
  )
}

export default App
