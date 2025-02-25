import { useState } from 'react';
import { Image as ImageIcon, RefreshCcw } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
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

          </div>

          {/* Right Column - Preview & Generate */}
          <div className="space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;