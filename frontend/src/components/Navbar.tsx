import { Camera, User, Heart } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/store/AuthStore';


const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (user) {
      navigate('/')
    } else
      navigate('/login')
  }

  const { authState} = useAuthStore();

  const user = authState.user



  return (
    <nav className="bg-gradient-to-r from-violet-400 to-pink-400 border-b w-full fixed z-20">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Button onClick={() => navigate('/')} variant="ghost" className="flex items-center space-x-2 hover:bg-transparent">
            <Camera className="h-6 w-6 text-white" strokeWidth={2.5} />
            <span className="text-xl font-bold leading-tight bg-gradient-to-br from-white to-white/80 text-transparent bg-clip-text drop-shadow-2xl">HAIRLYTIC</span>          </Button>

          {/* Main Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Button onClick={() => navigate('/')} variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white cursor-pointer">
                  Home
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button onClick={() => navigate('/generate')} variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white cursor-pointer">
                  Generate
                </Button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button onClick={() => navigate('/pricing')} variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white cursor-pointer">
                  Pricing
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Heart className="h-6 w-6" strokeWidth={2.5} />
            </Button>
            <Button
              onClick={handleNavigate}
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90 font-medium cursor-pointer"
            >
              {user ?
                <><User className="h-5 w-5 mr-2" /><span className='text-black'>{user.username}</span></> :
                <><User className="h-5 w-5 mr-2" /><span>Sign In</span></>
              }
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;