import { Camera, User, Heart } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-600 to-pink-500 border-b">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Button variant="ghost" className="flex items-center space-x-2 hover:bg-transparent">
            <Camera className="h-6 w-6 text-white" strokeWidth={2.5} />
            <span className="text-2xl font-semibold text-white">HairAI</span>
          </Button>

          {/* Main Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Button variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white">
                  Generate
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white">
                  Gallery
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white">
                  How It Works
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="text-lg text-white hover:bg-white/10 hover:text-white">
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
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90 font-medium"
            >
              <User className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;