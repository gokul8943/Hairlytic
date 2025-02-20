import React from 'react'
import { Card, CardContent } from './ui/Card';

interface StepCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    step: number;
  }
const StepCard = ({ icon, title, description, step }: StepCardProps) => {
  return (
    <div>
  <Card className="relative group hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-violet-600 to-pink-500" />
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="space-y-2">
          <span className="text-sm font-medium text-purple-600">Step {step}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
    </div>
  )
}

export default StepCard
