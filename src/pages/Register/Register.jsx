import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Register = () => {
    // 1. use -> useContext (Standard Practice)
    const { handleRegister, setUser, googleLogin } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password Validation Logic
        const upperCase = /^(?=.*[A-Z]).+$/;
        const lowerCase = /^(?=.*[a-z]).+$/;
        const passLength = /^.{6,}$/;

        if(!upperCase.test(password)){
            setPasswordError("Must contain at least one Uppercase letter.");
            return;
        }
        else if(!lowerCase.test(password)){
            setPasswordError("Must contain at least one Lowercase letter.");
            return;
        }
        else if(!passLength.test(password)){
            setPasswordError("Must be at least 6 characters long.")
            return;
        }
        else{
            setPasswordError("")
        }

        handleRegister(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // আপডেট প্রোফাইল বা ডাটাবেস সেভ করার কাজ এখানে করতে পারেন
                toast.success("Registration Successful!");
                setTimeout(()=> navigate(location.state ? location.state : "/"), 1500);
            })
            .catch(error => {
                toast.error(`Registration Failed: ${error.message}`);
            })
    }

    const handleGoogleSubmit = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);        
                toast.success("Login Successful!");
                setTimeout(()=> navigate(location.state ? location.state : "/"), 1500 )
            })
            .catch(error => {
                toast.error(`Login Failed: ${error.message}`);
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10">
            <div className="card bg-base-100 w-full max-w-md shadow-xl border border-gray-100">
                
                <div className="card-body px-8 py-10">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
                    <p className="text-center text-gray-500 mb-6 text-sm">Get started with your free account</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                name='name' 
                                placeholder="John Doe" 
                                className="input input-bordered w-full focus:outline-none focus:border-secondary" 
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name='email' 
                                placeholder="user@example.com" 
                                className="input input-bordered w-full focus:outline-none focus:border-secondary" 
                                required
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                name='photo' 
                                placeholder="https://example.com/photo.jpg" 
                                className="input input-bordered w-full focus:outline-none focus:border-secondary" 
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name='password' 
                                placeholder="Create a strong password" 
                                className={`input input-bordered w-full focus:outline-none focus:border-secondary ${passwordError ? 'input-error' : ''}`} 
                                required
                            />
                            {/* Error Message Styling */}
                            {passwordError && (
                                <label className="label">
                                    <span className="label-text-alt text-red-500 font-medium">{passwordError}</span>
                                </label>
                            )}
                        </div>

                        <button className="btn btn-secondary w-full text-white text-lg font-bold mt-4 shadow-md">
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-gray-400 text-sm my-4">OR REGISTER WITH</div>

                    {/* Google Button */}
                    <button 
                        onClick={handleGoogleSubmit} 
                        className="btn btn-outline w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium normal-case flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </button>

                    <p className='text-center mt-6 text-sm text-gray-600'>
                        Already have an account? 
                        <Link to={"/auth/login"} className='text-secondary font-bold hover:underline ml-1'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-center" theme="colored" />
        </div>
    );
};

export default Register;