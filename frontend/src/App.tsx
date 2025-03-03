import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Pricing from './pages/Pricing'
import PromptGenerator from './pages/PromptGenerator'
import Footer from './components/Footer'

const App = () => {

  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  
  return (
    <div className=' min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <div className='pt-[20px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/generate' element={<PromptGenerator />} />
          <Route />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App
