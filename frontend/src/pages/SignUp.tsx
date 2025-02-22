import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "@/services/userApi/user.api";
import { message } from 'antd';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      message.error("Please fix the errors in the form");
      return;
    }

    try {
      const response = await register(formData);
      if (response.status === 200 || response.status === 201) {
        message.success("User Registered Successfully");
        navigate('/login');
      }
    } catch (error:any) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      message.error(errorMessage);
      console.error("Registration error:", error);
    }
  };

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
            <div className="bg-gradient-to-br from-violet-600 to-pink-600 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">1M+</h3>
              <p className="text-white">Styles Generated</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-pink-600 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white/80 drop-shadow-lg">50K+</h3>
              <p className="text-white">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <Card className="w-full max-w-md mx-auto mt-[30px] backdrop-blur-sm bg-gradient-to-br from-violet-400 via-purple-300 to-blue-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold text-center drop-shadow-2xl">Create your account</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Create your account to continue your AI styling journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-1">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-11 bg-white/70"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11 bg-white/70"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-11 bg-white/70"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-11 bg-white/70"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-11 bg-white/70"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
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

              <Button type="submit" className="w-full h-11 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white">
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm">
            <span className="w-full text-muted-foreground">
              Already have an account?{' '}
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