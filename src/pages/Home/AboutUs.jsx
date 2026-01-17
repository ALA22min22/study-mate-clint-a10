import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { HashLink } from 'react-router-hash-link';

const AboutUs = () => {
  return (
    <section  className=" pb-12  overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-base-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Group of students studying" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Badge/Card */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-12">
                    <span className="text-xl font-bold">5K+</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Students</p>
                  <p className="font-bold text-gray-800">Trusted Community</p>
                </div>
              </div>
            </div>

            {/* Decorative Dot Pattern (Optional) */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">
              Empowering Students to <br /> <span className="text-primary">Learn Together</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              StudyMate isn't just a website; it's a movement to end the isolation of studying alone. We believe that knowledge grows when shared. Our platform connects ambitious students from diverse backgrounds to collaborate, share resources, and achieve academic excellence.
            </p>

            {/* Key Points List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Connect with verified study partners.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Access community-shared notes and resources.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Safe and moderated learning environment.</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex gap-4">
              <HashLink smooth to={"#story"} className="btn btn-primary text-black">Read Our Story</HashLink>
              <HashLink smooth to={"#contact"} className="btn btn-outline border-base-300">Contact Us</HashLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;