import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Check } from 'lucide-react';
import { Button } from "./ui/Button";
import { Badge } from "@/components/ui/Badge";

interface PlanCardProps {
    title: string;
    description: string;
    price: number;
    features: string[];
    icon: any;
    isPopular?: boolean;
    buttonText?: string;
  }
  
  const PlanCard = ({ 
    title, 
    description, 
    price, 
    features, 
    icon: Icon,
    isPopular = false,
    buttonText = "Get Started"
  }: PlanCardProps) => {
  
  return (
    <Card className={`relative backdrop-blur-sm bg-white/95 border-2 
      ${isPopular ? 'border-purple-400 shadow-xl shadow-purple-500/20 transform md:-translate-y-4' : 'border-transparent hover:border-purple-300'} 
      transition-all duration-300`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-violet-600 to-pink-500 text-white">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="space-y-2 text-center">
        <div className="flex justify-center mb-4">
          <Icon className="h-12 w-12 text-purple-600" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-baseline justify-center mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard