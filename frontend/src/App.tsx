import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
     <Navbar />
     <Routes>
       <Route path='/' element= {<Home/> } />
       <Route path='/login' element= {<Login/> } />
       <Route />
     </Routes>
    </div>
  )
}

export default App
