import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = () => {
    try {

    } catch (error) {

    }
  }


  return (
    <div className="min-h-screen bg-white/85 flex items-center justify-center p-6">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Welcome Content */}
        <div className="text-white space-y-6 p-8 hidden md:block">
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-br from-violet-600 via-emerald-800 to-blue-700 text-transparent bg-clip-text drop-shadow-2xl">
            Transform Your Look with AI-Powered Hairstyles
          </h1>

          <p className="text-xl text-slate-500 drop-shadow-xl">
            Join thousands of users discovering their perfect hairstyle through the power of artificial intelligence.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-gradient-to-br from-violet-600  to-pink-600 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">1M+</h3>
              <p className="text-whit">Styles Generated</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-pink-600 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white/80 drop-shadow-lg">50K+</h3>
              <p className="text-whit">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="w-full max-w-md mx-auto mt-[30px] backdrop-blur-sm bg-gradient-to-br from-violet-400 via-purple-300 to-blue-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold text-center drop-shadow-2xl">Create your account</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Create to your account to continue your AI styling journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">

            <div className="space-y-4">
              <div className="space-y-2 bg-white/70 rounded-lg">
                <Input
                  type="name"
                  placeholder="Name"
                  name="name"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 bg-white/70 rounded-lg">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 bg-white/70 rounded-lg">
                <Input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 bg-white/70 rounded-lg">
                <Input
                  name="'password"
                  type="password"
                  placeholder="Password"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 bg-white/70 rounded-lg">
                <Input
                  type="Confirm password"
                  placeholder=" Confirm Password"
                  className="h-11"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded border-gray-300" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button className="w-full h-11 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white cursor-pointer">
              Create Account
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            <span className="w-full text-muted-foreground">
              Do you already have an account?{' '}
              <span onClick={() => navigate('/login')} className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                Login
              </span>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;