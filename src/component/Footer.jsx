
import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/Screenshot 2025-11-20 221855.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (

        <footer className="bg-slate-900 text-gray-300 tracking-wide">
            
            {/* Main Footer Content */}
            <div className="container mx-auto p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand Section */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <img className='w-12 h-12 rounded-full border-2 border-blue-400' src={logo} alt="StudyMate Logo" />
                            <span className="text-2xl font-bold text-white">StudyMate</span>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed">
                            StudyMate is your smart companion to organize learning, track progress, and reduce study stress efficiently.
                        </p>
                        
                        {/* Social Icons (With Hover Effect) */}
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/ajalaminhossen01" className="hover:text-blue-500 transition-all text-xl"><FaFacebook /></a>
                            <a href="https://twitter.com" className="hover:text-blue-400 transition-all text-xl"><FaTwitter /></a>
                            <a href="https://www.instagram.com/ajalaminhossen01?igsh=MW42bXFsazRzZHQwbA==" className="hover:text-pink-500 transition-all text-xl"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/md-alamin-dev/" className="hover:text-blue-600 transition-all text-xl"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white opacity-100">Quick Links</h6>
                        <Link to="/" className="link link-hover hover:text-blue-400">Home</Link>
                        <HashLink smooth to="/#top-partner" className="link link-hover hover:text-blue-400">Top Partner</HashLink>
                        <Link to="/auth/login" className="link link-hover hover:text-blue-400">Login</Link>
                        <Link to="/auth/register" className="link link-hover hover:text-blue-400">Register</Link>
                    </div>

                    {/* Company */}
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white opacity-100">Company</h6>
                        <Link to="/about" className="link link-hover hover:text-blue-400">About us</Link>
                        <HashLink smooth to="/#contact" className="link link-hover hover:text-blue-400">Contact</HashLink>
                        <Link to="/privacyPolicy" className="link link-hover hover:text-blue-400">Privacy Policy</Link>
                        <HashLink smooth to="/#how-work" className="link link-hover hover:text-blue-400">Terms of use</HashLink>
                    </div>

                    {/* Contact Information */}
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white opacity-100">Contact Us</h6>
                        <div className='text-sm space-y-2'>
                            <p>📍 123 Education Uttara, Dhaka</p>
                            <p>📧 2213081052@uttarauniversity.edu.bd</p>
                            <p>📞 +880 1911 508 715</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-slate-950 p-4 text-center border-t border-slate-800">
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()} - All rights reserved by <span className='text-blue-400 font-semibold'>StudyMate Ltd</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;