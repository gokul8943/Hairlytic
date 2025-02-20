import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <div className='pt-[20px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route />
        </Routes>
      </div>
    </div>
  )
}

export default App
