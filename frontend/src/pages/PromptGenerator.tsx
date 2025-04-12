import { useState } from 'react';
import { Image as ImageIcon, RefreshCcw } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/TextArea";
import { Badge } from "@/components/ui/Badge";
import { generateImage } from '@/services/imageApi/image.api';
import { message, Spin } from 'antd';
import useAuthStore from '@/store/AuthStore';

interface GenerateFormData {
  prompt: string;
  referenceImage: string;
  userId: string;
}

const PromptGenerator = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { authState } = useAuthStore()

  const userId = authState.user?.id || '';

  const [formData, setFormData] = useState<GenerateFormData>({
    prompt: "",
    referenceImage: "",
    userId: userId
  });

  // Handle Image Upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        setFormData((prev) => ({ ...prev, referenceImage: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Submit
  const handleSubmit = async () => {
    if (!formData.referenceImage || !formData.prompt || !formData.userId) {
      message.error("Please upload an image, enter a description, and make sure you're logged in.");
      return;
    }

    setLoading(true);
    try {
      try {
        const res = await generateImage(formData);
        console.log('res',res)
        if (res.data.success) {
          setGeneratedImages([...generatedImages, res.data.image]);
          message.success("Image generated successfully!");
        } else {
          message.error(res.data.message || "Failed to generate the image");
        }
      } catch (error) {
        console.log('error',error);
        
      }
      
    } catch (err:any) {
      console.error('Error:', err);
      message.error("Failed to generate the image. Please try again.",err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold leading-tight bg-gradient-to-br from-violet-600 via-emerald-800 to-pink-700 text-transparent bg-clip-text drop-shadow-2xl mb-4">
            Create Your Dream Hairstyle
          </h1>
          <p className="text-xl text-slate-900">
            Upload your photo and describe your dream look!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Upload & Select */}
          <div className="space-y-6">
            {/* Image Upload */}
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-full">
                  {selectedImage ? (
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="ghost"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => {
                          setSelectedImage(null);
                          setFormData((prev) => ({ ...prev, referenceImage: "" }));
                        }}
                      >
                        <RefreshCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full cursor-pointer hover:border-purple-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600">Drop your photo here or click to upload</p>
                      <p className="text-sm text-gray-400 mt-2">Recommended: Clear, front-facing photo</p>
                    </label>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Hair Style & Color Selection */}
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hair Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Long Wavy", "Bob Cut", "Pixie Style", "Beach Waves"].map((style) => (
                      <Badge
                        key={style}
                        variant="secondary"
                        className="cursor-pointer hover:bg-purple-100"
                        onClick={() => setFormData((prev) => ({ ...prev, prompt: `${prev.prompt} ${style}` }))}
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hair Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Blonde", "Brunette", "Black", "Red"].map((color) => (
                      <Badge
                        key={color}
                        variant="secondary"
                        className="cursor-pointer hover:bg-purple-100"
                        onClick={() => setFormData((prev) => ({ ...prev, prompt: `${prev.prompt} ${color}` }))}
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Description & Generate */}
          <div className="space-y-8">
            <Card className="backdrop-blur-sm bg-white/95">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold mb-2">Describe Your Desired Style</h3>
                <Textarea
                  placeholder="Describe your dream hairstyle... (e.g., 'Long wavy blonde hair with layers')"
                  className="min-h-[100px]"
                  name="prompt"
                  value={formData.prompt}
                  onChange={(e) => setFormData((prev) => ({ ...prev, prompt: e.target.value }))}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700" onClick={handleSubmit} disabled={loading}>
              {loading ? <Spin /> : "Generate Image"}
            </Button>

            {/* Display Generated Images */}
            {generatedImages.length > 0 && (
              <Card className="backdrop-blur-sm bg-white/95">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Generated Images</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {generatedImages.map((img, index) => (
                      <img key={index} src={img} alt="Generated" className="w-full rounded-lg shadow-lg" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
