import React from 'react';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ClockIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Verified Community",
      description: "Safety is our priority. Every profile is verified to ensure you connect with genuine students, not bots or spammers.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />,
      bgClass: "bg-primary/10"
    },
    {
      id: 2,
      title: "Smart Matching",
      description: "Our algorithm matches you based on subjects, study goals, and availability to find your perfect academic partner.",
      icon: <UserGroupIcon className="w-8 h-8 text-secondary" />,
      bgClass: "bg-secondary/10"
    },
    {
      id: 3,
      title: "24/7 Study Rooms",
      description: "Late-night learner or early bird? Find partners and active study rooms anytime, anywhere around the globe.",
      icon: <ClockIcon className="w-8 h-8 text-accent" />,
      bgClass: "bg-accent/10"
    },
    {
      id: 4,
      title: "Focus & Productivity",
      description: "Use our built-in Pomodoro timers and goal-tracking tools to stay focused and achieve more in less time.",
      icon: <LightBulbIcon className="w-8 h-8 text-warning" />,
      bgClass: "bg-warning/10"
    }
  ];

  return (
    <section className=" ">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center my-16">
          <h2 className="text-4xl font-extrabold tracking-widest uppercase  mb-2">
            Why Choose Us
          </h2>
          <h3 className=" text-gray-900">
            We Are The Best For Your <br className="hidden md:block" />
            <span className="text-secondary">Academic Growth</span>
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="card bg-base-100 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="card-body items-center text-center">
                
                {/* Icon Box */}
                <div className={`p-4 rounded-full mb-4 ${feature.bgClass} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h4 className="card-title text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;