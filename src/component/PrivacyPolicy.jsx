import React from 'react';
import { Link } from 'react-router';
import { FaShieldAlt } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className=" bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                
                {/* Header Section */}
                <div className="bg-slate-900 px-8 py-10 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-600 rounded-full bg-opacity-20">
                            <FaShieldAlt className="text-4xl text-blue-500" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 space-y-8 text-gray-600 leading-relaxed">
                    
                    {/* Introduction */}
                    <section>
                        <p className="text-lg">
                            At <span className="font-bold text-blue-600">StudyMate</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform to find study partners and manage your assignments.
                        </p>
                    </section>

                    {/* 1. Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">1. Information We Collect</h2>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong>Account Information:</strong> When you register, we collect your name, email address, and profile picture (via Google or email sign-up).</li>
                            <li><strong>Profile Details:</strong> Information you provide to find study partners, such as your education level, subjects of interest, and study goals.</li>
                            <li><strong>Usage Data:</strong> Details about the assignments you create, submissions you make, and your interactions with other students.</li>
                        </ul>
                    </section>

                    {/* 2. How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">2. How We Use Your Information</h2>
                        <p className="mb-3">We use the collected data for the following purposes:</p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>To verify your identity and manage your account.</li>
                            <li>To <strong>match you with suitable study partners</strong> based on your interests.</li>
                            <li>To display your profile to other students within the community (only public details).</li>
                            <li>To facilitate assignment tracking and grading features.</li>
                        </ul>
                    </section>

                    {/* 3. Sharing Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">3. Sharing Your Information</h2>
                        <p>
                            Since StudyMate is a social learning platform, some of your information (like Name, Profile Picture, and Study Interests) will be visible to other registered users to help them connect with you. We <strong>never sell</strong> your private data to third-party advertisers.
                        </p>
                    </section>

                    {/* 4. Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">4. Data Security</h2>
                        <p>
                            We implement industry-standard security measures (including encryption via Firebase) to protect your personal information from unauthorized access, alteration, or disclosure.
                        </p>
                    </section>

                    {/* 5. Your Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">5. Your Rights</h2>
                        <p>
                            You have the right to access, update, or delete your personal information at any time. You can manage your profile settings directly from your dashboard or contact us for assistance.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Have Questions?</h3>
                        <p className="mb-4 text-sm">
                            If you have any questions about this Privacy Policy, please contact us.
                        </p>
                        <HashLink smooth to="/#contact" className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none">
                            Contact Support
                        </HashLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;