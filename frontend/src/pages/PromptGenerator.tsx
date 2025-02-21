import { useState } from 'react';
import { Sparkles, Image as ImageIcon, RefreshCcw, Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Badge } from "@/components/ui/Badge";

const PromptGenerator = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const hairStyles = [
    "Long Wavy", "Bob Cut", "Pixie Style", "Beach Waves",
    "Straight Sleek", "Curly Natural", "Layered Cut", "Modern Shag"
  ];

  const hairColors = [
    "Blonde", "Brunette", "Black", "Red",
    "Pink", "Blue", "Purple", "Silver"
  ];

  return (
    <div className="min-h-screen  py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold leading-tight bg-gradient-to-br from-violet-600 via-emerald-800 to-pink-700 text-transparent bg-clip-text drop-shadow-2xl mb-4">
            Create Your Dream Hairstyle
          </h1>
          <p className="text-xl text-slate-900">
            Describe your perfect look or get inspired by our suggestions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Input Section */}
          <div className="space-y-6">
            {/* Image Upload */}
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-full">
                  {selectedImage ? (
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="/api/placeholder/400/400"
                        alt="Selected"
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="ghost"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => setSelectedImage(null)}
                      >
                        <RefreshCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full cursor-pointer hover:border-purple-400 transition-colors">
                      <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600">Drop your photo here or click to upload</p>
                      <p className="text-sm text-gray-400 mt-2">Recommended: Clear, front-facing photo</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Text Description */}
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold mb-2">Describe Your Desired Style</h3>
                <Textarea 
                  placeholder="Describe your dream hairstyle... (e.g., 'Long wavy blonde hair with layers')"
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Quick Selects */}
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hair Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {hairStyles.map((style) => (
                      <Badge 
                        key={style}
                        variant="secondary" 
                        className="cursor-pointer hover:bg-purple-100"
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hair Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {hairColors.map((color) => (
                      <Badge 
                        key={color}
                        variant="secondary"
                        className="cursor-pointer hover:bg-purple-100"
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview & Generate */}
          <div className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/95 h-full">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">AI Generation Settings</h3>
                  
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Number of Variations
                    </label>
                    <Input 
                      type="number" 
                      min="1" 
                      max="4" 
                      defaultValue="1"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Creativity Level
                    </label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="50"
                      className="w-full accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Natural</span>
                      <span>Creative</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white"
                >
                  <Wand2 className="h-5 w-5 mr-2" />
                  Generate Hairstyles
                </Button>

                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-purple-900">Pro Tip</h4>
                      <p className="text-sm text-purple-700">
                        For best results, use a clear front-facing photo with good lighting. 
                        Be specific in your description and try different creativity levels!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;