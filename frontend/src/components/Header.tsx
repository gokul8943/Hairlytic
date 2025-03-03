import { useNavigate } from "react-router-dom"
import { Button } from "./ui/Button"
import useAuthStore from "@/store/AuthStore"


const Header = () => {
const navigate = useNavigate()
const { authState} = useAuthStore();
const users = authState.user


const handleNavigate = () =>{
  if(users){
    navigate('/generate')
  }else{
    navigate('/login')
  }
}

  return (
    <div className='flex flex-col justify-between items-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to style generator</p>
      </div>
      <h1 className='text-4xl font-bold max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center drop-shadow-md'> Transform Your <span className='text-blue-500'>Look</span>,with in seconds</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity  with AI. Turn your imagination into visual art in seconds just type, and watch the magic happen.</p>
      <div className="mt-10 flex justify-center">
        <Button onClick={handleNavigate} className="p-9 text-4xl font-bold rounded-lg bg-gradient-to-br from-violet-600 to-pink-500">Generate</Button>
      </div>
    </div>
  )
}

export default Header
