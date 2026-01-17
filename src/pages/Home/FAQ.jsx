import React from 'react';
import { motion } from "framer-motion";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What is StudyMate?",
      answer: "StudyMate is a platform designed to help students find the ideal study partner. Whether you're preparing for exams or learning a new skill, you can connect with peers who share your goals, check their ratings, and collaborate effectively."
    },
    {
      id: 2,
      question: "How do I find the right partner and check their ratings?",
      answer: "You can search for partners based on specific subjects. Our platform features a rating system where you can see feedback from previous partners. You can also browse our 'Top Partners' section to find the most highly-rated students."
    },
    {
      id: 3,
      question: "How do I connect with a study partner?",
      answer: "Once you find a profile that matches your requirements, simply click the 'Send Request' button. The other student will be notified, and you can start your study journey once they accept."
    },
    {
      id: 4,
      question: "Can I track or update my sent requests?",
      answer: "Yes! You can view a list of all partners you have sent requests to in your dashboard. StudyMate allows you to track the status and even update specific request data if your needs change."
    },
    {
      id: 5,
      question: "How can other students find me?",
      answer: "By using the 'Create Partner Profile' feature, you can add your details, subjects you're interested in, and your study schedule. This makes your profile visible so others can send you requests."
    }
  ];

  return (
    <section className="">
      <div className="container mx-auto ">
        
        {/* Title */}
        <div className="text-center my-16">
          <h2 className="text-4xl font-extrabold mb-2 uppercase">Frequently Asked Questions</h2>
          <p className="text-gray-500">Find answers to common questions about StudyMate.</p>
        </div>

        {/* Accordion Container */}
        <motion.div className="join join-vertical w-full border border-base-300 rounded-3xl bg-white  "
        
                style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}

              
                whileHover={{ 
                    scale: 1.05, 
                    y: -10,      
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}

               
                transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17     
                }}
        >

          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="collapse collapse-arrow join-item border-b border-base-300 last:border-b-0"
            >
              {/* Radio input makes it so only one item opens at a time */}
              <input type="radio" name="studymate-accordion" defaultChecked={faq.id === 1} /> 
              
              <div className="collapse-title text-xl font-medium pt-5">
                {faq.question}
              </div>
              
              <div className="collapse-content"> 
                <p className="text-base-content/70 pb-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;