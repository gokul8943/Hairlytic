import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
     <Navbar />
     <Routes>
       <Route path='/' element= {<Home/> } />
       <Route />
     </Routes>
    </div>
  )
}

export default App
