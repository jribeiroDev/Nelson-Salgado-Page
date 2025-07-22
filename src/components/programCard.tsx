
import React from 'react';
import { Calendar, Dumbbell, User, Zap } from 'lucide-react';

interface ProgramCardProps {
  title?: string;
  duration?: string;
  activities?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  backgroundImage?: string;
}

const ProgramCard = ({ 
  title = "3-2-1 Method Define Edition",
  duration = "4 Weeks",
  activities = [
    { icon: <Calendar className="w-6 h-6" />, text: "4 Weeks" },
    { icon: <Dumbbell className="w-6 h-6" />, text: "Strength" },
    { icon: <User className="w-6 h-6" />, text: "Pilates" }
  ],
  backgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
}: ProgramCardProps) => {
  return (
    <section className="cursor-pointer select-none relative w-full max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 h-96 sm:h-[28rem]">
      {/* Background Image */} 
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
        {/* Title - Centered at top */}
        <div className="text-center pt-2 sm:pt-4">
          <h3 className="text-white text-xl sm:text-xl font-bold leading-tight px-1 sm:px-2 break-words mb-2 sm:mb-0">
            {title}
          </h3>
        </div>
        {/* Icon Bar - Bottom with 3 items */}
        <div className="flex-row flex justify-center gap-2 sm:gap-3 pb-2 pt-2 sm:pt-0">
          {activities.slice(0, 3).map((activity, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 py-5 sm:py-2 text-white min-w-0 w-full sm:flex-1"
            >
              <div className="text-white/90 flex-shrink-0">
                {activity.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-center">
                {activity.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCard;
