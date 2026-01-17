import React from 'react';
import { Link } from 'react-router';
import { FaUserFriends, FaLightbulb, FaRocket } from 'react-icons/fa';
import StatsSection from '../pages/Home/StatsSection';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            
            <div className="hero min-h-[500px] bg-white py-10 lg:py-0">
   
    <div className="hero-content flex-col lg:flex-row-reverse px-4 gap-8 lg:gap-14">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                className="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover h-auto" 
                alt="Group Study"
            />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                Learning is Better <br className="hidden md:block"/> 
                <span className="text-blue-600">Together.</span>
            </h1>
            
            <p className="py-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Struggling to stay motivated? StudyMate connects you with like-minded students 
                from around the world. Find your perfect study partner, collaborate on assignments, 
                and achieve your academic goals together.
            </p>
            
            <Link to="/auth/register" className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-xl px-8 font-bold transition-all duration-300">
                Join the Community
            </Link>
        </div>
    </div>
</div>

            {/* 2. Our Mission Section */}
            <div className="py-16  px-6 lg:px-20 text-center max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-500 font-medium">
                    "To ensure no student feels alone in their academic journey. We are building a platform where knowledge sharing is seamless, and every student finds the support they need to succeed."
                </p>
            </div>

            {/* 3. Why Choose StudyMate? (Features) */}
            <div className="bg-white py-16  ">
                <div className="container mx-auto ">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800  pb-16">Why Choose StudyMate?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="card bg-blue-50 hover:shadow-xl transition-all duration-300 border border-blue-100">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-blue-100 rounded-full mb-2">
                                    <FaUserFriends className="text-4xl text-blue-600" />
                                </div>
                                <h3 className="card-title text-xl font-bold text-gray-800">Find Study Partners</h3>
                                <p className="text-gray-600">
                                    Connect with students who are studying the same subjects or working on similar assignments.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card bg-green-50 hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-green-100 rounded-full mb-2">
                                    <FaLightbulb className="text-4xl text-green-600" />
                                </div>
                                <h3 className="card-title text-xl font-bold text-gray-800">Share Knowledge</h3>
                                <p className="text-gray-600">
                                    Create assignments, grade your friends' work, and learn through peer-to-peer feedback.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card bg-purple-50 hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-purple-100 rounded-full mb-2">
                                    <FaRocket className="text-4xl text-purple-600" />
                                </div>
                                <h3 className="card-title text-xl font-bold text-gray-800">Boost Productivity</h3>
                                <p className="text-gray-600">
                                    Stay accountable and motivated. Studying with others helps you stay on track and avoid procrastination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Stats Section  */}
            <h3 className='text-4xl font-extrabold text-center my-16 uppercase '>Our Status</h3>
            <section>
                <StatsSection></StatsSection>
            </section>

            {/* 5. Final CTA */}
            <div className="py-20 text-center bg-blue-600 text-white">
                <h2 className="text-4xl font-extrabold mb-4">Ready to boost your grades?</h2>
                <p className="mb-8 opacity-90">Join thousands of students finding their perfect study partners today.</p>
                <Link to="/auth/register" className="btn btn-secondary bg-white btn-outline  rounded-xl hover:bg-secondary hover:text-white transition-colors font-bold text-blue-600">
                    Get Started for Free
                </Link>
            </div>

        </div>
    );
};

export default About;