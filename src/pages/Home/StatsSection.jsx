import React from 'react';
import { 
  UserGroupIcon, 
  CheckBadgeIcon, 
  BookOpenIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';

const StatsSection = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Stats Container */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100 w-full border border-base-200">
          
          {/* Stat 1: Total Students */}
          <div className="stat place-items-center py-8">
            <div className="stat-figure text-primary">
              <UserGroupIcon className="w-10 h-10" />
            </div>
            <div className="stat-title">Total Students</div>
            <div className="stat-value text-primary">5.2K</div>
            <div className="stat-desc">Active learners joined</div>
          </div>
          
          {/* Stat 2: Partners Connected */}
          <div className="stat place-items-center py-8">
            <div className="stat-figure text-secondary">
              <CheckBadgeIcon className="w-10 h-10" />
            </div>
            <div className="stat-title">Study Partners Found</div>
            <div className="stat-value text-secondary">3,400+</div>
            <div className="stat-desc">Successful connections made</div>
          </div>
          
          {/* Stat 3: Subjects/Resources */}
          <div className="stat place-items-center py-8">
            <div className="stat-figure text-accent">
              <BookOpenIcon className="w-10 h-10" />
            </div>
            <div className="stat-title">Available Subjects</div>
            <div className="stat-value text-accent">85+</div>
            <div className="stat-desc">Science, Arts & Commerce</div>
          </div>

          {/* Stat 4: User Rating */}
          <div className="stat place-items-center py-8">
            <div className="stat-figure text-warning">
              <StarIcon className="w-10 h-10" />
            </div>
            <div className="stat-title">User Satisfaction</div>
            <div className="stat-value text-warning">4.8/5</div>
            <div className="stat-desc">Based on 1200+ reviews</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StatsSection;