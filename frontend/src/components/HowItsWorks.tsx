import { Upload, Wand2, Camera, Share2 } from 'lucide-react';
import StepCard from '@/components/StepCard';





const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Your Photo",
      description: "Take a selfie or upload your best photo. Our AI works best with clear, front-facing images in good lighting.",
      step: 1
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Choose Your Style",
      description: "Browse through trending hairstyles or describe your dream look. Our AI understands both visual references and text descriptions.",
      step: 2
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Generate & Preview",
      description: "Watch as our AI transforms your photo with your chosen hairstyle. Get multiple variations to find your perfect look.",
      step: 3
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share & Save",
      description: "Save your favorite styles, share with friends, or take them to your stylist. Your new look is just a click away!",
      step: 4
    }
  ];

  return (
    <div className="min-h-screen py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold leading-tight bg-gradient-to-br from-pink-600 via-emerald-800 to-pink-700 text-transparent bg-clip-text drop-shadow-2xl" >
            How It Works
            </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Transform your look in minutes with our advanced AI technology
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-[2px] bg-purple-300/20 hidden md:block -translate-y-1/2" />
          
          {/* Step Cards */}
          {steps.map((step, index) => (
            <div key={index} className="relative backdrop-blur-sm bg-white/95 rounded-lg">
              <StepCard {...step} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Try It Now For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;