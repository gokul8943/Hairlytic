import { GithubIcon } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { message } from 'antd';
import { login } from '@/services/userApi/user.api';
import useAuthStore from '@/store/AuthStore';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginErrors {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<LoginErrors>({
    email: "",
    password: ""
  });

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: ""
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange:any= (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    if (!validateForm()) {
      message.error("Please fix the errors in the form");
      return;
    }

    try {
      const response = await login(formData);
      if (response?.status === 200) {
        const { accessToken, refreshToken, user } = response.data;
        useAuthStore.getState().login(accessToken, user, refreshToken);
        message.success("Login Successful");
        navigate('/');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Login failed";
      message.error(errorMessage);
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white/85 flex items-center justify-center p-4">
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
            <div className="bg-gradient-to-br from-violet-500 to-pink-500 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">1M+</h3>
              <p className="text-white">Styles Generated</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-pink-500 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white/80 drop-shadow-lg">50K+</h3>
              <p className="text-white">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-gradient-to-br from-violet-400 via-purple-300 to-blue-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold text-center drop-shadow-2xl">Welcome back</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Login to your account to continue your AI styling journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <GithubIcon className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="relative my-6">
                <Separator />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-muted-foreground text-sm">
                  or continue with
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-11 bg-white/70"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="h-11 bg-white/70"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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

              <Button type="submit" className="w-full h-11 mt-4 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm">
            <span className="w-full text-muted-foreground">
              Don't have an account?{' '}
              <span onClick={() => navigate('/signup')} className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                Sign up for free
              </span>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;