import React from 'react';
import { motion } from "framer-motion";


const HowItWorks = () => {
    return (
        <div id='how-work' className='flex flex-col md:flex-col lg:flex-row justify-center items-center gap-30'>
            <div>
                <h3 className='text-3xl font-semibold'>StudyMate simplifies your learning journey in three easy steps:</h3>
                <ol className="space-y-2 text-gray-800" >
                    <li className='mt-8'><span className="font-bold text-2xl ">1.</span> <span className='text-2xl font-semibold'>Create Your Profile </span><p className='text-[20px] ml-6'> Sign up and personalize your learning dashboard. Choose your subjects, set goals, and track your progress <br /> — all in one place.</p></li>
                    <li className='mt-8'><span className="font-bold text-2xl ">2.</span> <span className='text-2xl font-semibold'>Explore Smart Study Tools </span><p className='text-[20px] ml-6'> Access curated notes, flashcards, quizzes, and revision resources tailored to your syllabus. <br /> Whether you're prepping for exams or reviewing concepts, StudyMate adapts to your pace.</p></li>
                    <li className='mt-8'><span className="font-bold text-2xl ">3.</span> <span className='text-2xl font-semibold'>Track & Improve</span> <p className='text-[20px] ml-6'> Get instant feedback on your performance. Monitor your strengths, revisit weak areas, and celebrate <br /> milestones with gamified progress tracking.</p></li>

                </ol>
            </div>
            <div className="flex justify-center items-center py-10">
                <motion.img
                    src="https://i.ibb.co.com/mFSCz0gT/png-clipart-cycle-process-art-pdca-plan-management-process-lean-miscellaneous-text-thumbnail-removeb.png"
                    alt="Spinning Cycle"
                    className="w-64 h-64 object-contain" 
    
                    animate={{ rotate: 360 }} 
                    transition={{
                        duration: 10,       
                        repeat: Infinity,   
                        ease: "linear"      
                    }}
                />
            </div>
        </div>
    );
};

export default HowItWorks;