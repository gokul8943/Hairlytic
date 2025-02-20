import { GithubIcon } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white/80 flex items-center justify-center p-4">
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
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-emerald-500">1M+</h3>
              <p className="text-violet-500">Styles Generated</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-emerald-600">50K+</h3>
              <p className="text-violet-500">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/95">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Login to your account to continue your AI styling journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  {/* <Google className="h-5 w-5 mr-2" /> */}
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

            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
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

            <Button className="w-full h-11 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white">
              Sign In
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            <span className="w-full text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                Sign up for free
              </a>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;