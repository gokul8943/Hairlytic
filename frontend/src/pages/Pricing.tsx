import { Camera, Crown, Zap } from 'lucide-react';
import PlanCard from '../components/PlanCard'
const PricingSection = () => {
    const plans = [
      {
        title: "Basic",
        description: "Perfect for getting started",
        price: 9,
        icon: Camera,
        features: [
          "50 AI generations per month",
          "Basic editing tools",
          "5 saved styles",
          "Email support"
        ]
      },
      {
        title: "Pro",
        description: "Perfect for professionals",
        price: 19,
        icon: Zap,
        isPopular: true,
        buttonText: "Get Pro",
        features: [
          "200 AI generations per month",
          "Advanced editing tools",
          "25 saved styles",
          "Priority support",
          "Style recommendations"
        ]
      },
      {
        title: "Enterprise",
        description: "For large teams & businesses",
        price: 49,
        icon: Crown,
        buttonText: "Contact Sales",
        features: [
          "Unlimited AI generations",
          "Premium editing suite",
          "Unlimited saved styles",
          "24/7 priority support",
          "API access",
          "Custom integrations"
        ]
      }
    ];
  
    return (
      <div className="min-h-screen  py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold leading-tight bg-gradient-to-br from-violet-600 via-emerald-800 to-blue-700 text-transparent bg-clip-text drop-shadow-2xl">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg font-bold text-slate-800 max-w-2xl mx-auto">
              Transform your look with our AI-powered hairstyle generation. Select the plan that best fits your creative needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingSection;
  