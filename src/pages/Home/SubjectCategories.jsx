import React from 'react';
import { 
  BeakerIcon, 
  CodeBracketIcon, 
  CalculatorIcon, 
  LanguageIcon, 
  GlobeAltIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline'; 
import { HashLink } from 'react-router-hash-link';

const SubjectCategories = () => {
  const subjects = [
    {
      id: 1,
      name: "Computer Science",
      partners: 120,
      icon: <CodeBracketIcon className="w-8 h-8 text-primary" />,
      description: "Find partners for React, Python, Data Structures, and more."
    },
    {
      id: 2,
      name: "Mathematics",
      partners: 85,
      icon: <CalculatorIcon className="w-8 h-8 text-secondary" />,
      description: "Calculus, Statistics, or Algebra—study together to solve problems."
    },
    {
      id: 3,
      name: "Science",
      partners: 64,
      icon: <BeakerIcon className="w-8 h-8 text-accent" />,
      description: "Connect with students for Physics, Chemistry, or Biology labs."
    },
    {
      id: 4,
      name: "Languages",
      partners: 95,
      icon: <LanguageIcon className="w-8 h-8 text-info" />,
      description: "Practice IELTS, GRE, or learn a new language with a native speaker."
    },
    {
      id: 5,
      name: "Business",
      partners: 42,
      icon: <GlobeAltIcon className="w-8 h-8 text-success" />,
      description: "Collaborate on Economics, Finance, or Marketing projects."
    },
    {
      id: 6,
      name: "General Studies",
      partners: 150,
      icon: <AcademicCapIcon className="w-8 h-8 text-warning" />,
      description: "Find partners for BCS, Govt. Jobs, or Admission tests."
    }
  ];

  return (
    <section className="">
      <div className="container mx-auto ">
        
        {/* Header */}
        <div className="text-center my-16">
          <h2 className="text-4xl font-extrabold mb-4 uppercase">Browse by Subject</h2>
          <p className="text-lg text-gray-500 text-center">
            Choose your interest and find the best-rated study partners who are ready to learn with you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div 
              key={subject.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary group cursor-pointer"
            >
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-base-200 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {subject.icon}
                  </div>
                  <div className="badge badge-outline badge-sm opacity-70">
                    {subject.partners} Active Partners
                  </div>
                </div>
                
                <h3 className="card-title text-2xl group-hover:text-primary transition-colors">
                  {subject.name}
                </h3>
                <p className="text-base-content/70 mt-2">
                  {subject.description}
                </p>

                <div className="card-actions justify-end mt-6">
                  <HashLink smooth to={"/Find-Partners/#findingPartner"} className="btn btn-primary btn-sm btn-outline group-hover:btn-active">
                    Find Partner
                  </HashLink>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SubjectCategories;