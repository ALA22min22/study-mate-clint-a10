import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Contact = () => {

    const handleSendMessage = (e) => {
        e.preventDefault();
       
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

       
        console.log({ name, email, message });

   
        toast.success("Thanks for reaching out! We will get back to you soon.");
        form.reset();
    };

    return (
        
        <section id="contact" className=" mb-16 bg-gray-50">
            <div className="container mx-auto ">
                
                <div className="text-center my-16">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about finding a study partner? Need help with an assignment? 
                        Fill out the form below or reach us directly.
                    </p>
                </div>

                <motion.div className="flex flex-col lg:flex-row gap-10 bg-white shadow-xl rounded-2xl overflow-hidden"
                
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
                    
                    {/* Left Side: Contact Information (Dark Theme) */}
                    <div className="lg:w-2/5 bg-slate-900 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-extrabold mb-6">Contact Information</h3>
                            <p className="text-gray-300 mb-8">
                                Feel free to reach out to us any time. We usually reply within 24 hours.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary rounded-lg">
                                        <FaPhoneAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Phone</h4>
                                        <p className="text-gray-400">+880 1911 508 715</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary rounded-lg">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email</h4>
                                        <p className="text-gray-400">2213081052@uttarauniversity.edu.bd</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary rounded-lg">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Address</h4>
                                        <p className="text-gray-400">123 Education Uttara, Dhaka</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle (Design Element) */}
                        <div className="mt-10 lg:mt-0">
                            <div className="w-24 h-24 bg-blue-600 rounded-full opacity-20 absolute bottom-10 left-10 blur-xl"></div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-3/5 p-10">
                        <form onSubmit={handleSendMessage} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="John Doe" className="input input-bordered w-full bg-gray-50 focus:border-blue-500" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="john@example.com" className="input input-bordered w-full bg-gray-50 focus:border-blue-500" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Looking for a study partner..." className="input input-bordered w-full bg-gray-50 focus:border-blue-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Message</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered h-32 w-full bg-gray-50 focus:border-blue-500" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn bg-primary hover:bg-blue-700 text-white w-full border-none text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;