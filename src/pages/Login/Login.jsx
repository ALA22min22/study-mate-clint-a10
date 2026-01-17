import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { RiLoginCircleFill } from 'react-icons/ri';
import { FcGoogle } from "react-icons/fc"; // Google Icon (Better than SVG path manually)

const Login = () => {
    const { googleLogin, signInFrom, setUser } = useContext(AuthContext); // use -> useContext
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleDemoUser = (e) => {
        e.preventDefault();
        setEmail("akl@gmail.com");
        setPassword("ALA22min");
        toast.info("Demo Credentials Applied!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInFrom(email, password)
            .then(result => {
                setUser(result.user)
                toast.success("Login Successful");
                setTimeout(()=> navigate(location.state ? location.state : "/"), 1500 )
            })
            .catch(error => {
                toast.error(`Login Failed: ${error.message}`);
            })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                toast.success("Login Successful");
                setTimeout(()=> navigate(location.state? location.state : "/"), 1500 )
            })
            .catch(error => {
                toast.error(`Login Failed: ${error.message}`);
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10">
            <div className="card bg-base-100 w-full max-w-md shadow-xl border border-gray-100">
                
                <div className="card-body px-8 py-10">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-6 text-sm">Please login to your account</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)} 
                                placeholder="user@example.com" 
                                className="input input-bordered w-full focus:outline-none focus:border-secondary" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e)=> setPassword(e.target.value)} 
                                placeholder="Enter your password" 
                                className="input input-bordered w-full focus:outline-none focus:border-secondary" 
                                required 
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-secondary ml-auto">Forgot password?</a>
                            </label>
                        </div>

                        <button className="btn btn-secondary w-full text-white text-lg font-bold mt-2 shadow-md">
                            Login
                        </button>
                    </form>

                    {/* Professional Divider */}
                    <div className="divider text-gray-400 text-sm my-6">OR LOGIN WITH</div>

                    <div className="flex flex-col gap-3">
                        {/* Google Button */}
                        <button 
                            onClick={handleGoogleSignIn} 
                            className="btn btn-outline w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium normal-case flex items-center justify-center gap-2"
                        >
                            <FcGoogle className="text-xl" /> {/* React Icons ব্যবহার করা ক্লিন */}
                            Continue with Google
                        </button>

                        {/* Demo Button */}
                        <button 
                            type='button' 
                            onClick={handleDemoUser} 
                            className='btn w-full bg-gray-800 hover:bg-gray-900 text-white normal-case flex items-center justify-center gap-2'
                        > 
                            <RiLoginCircleFill className='text-xl text-yellow-400'/> 
                            Demo User Login
                        </button>
                    </div>

                    <p className='text-center mt-8 text-sm text-gray-600'>
                        Don't have an account? 
                        <Link state={location.state} to={"/auth/Register"} className='text-secondary font-bold hover:underline ml-1'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-center" theme="colored" />
        </div>
    );
};

export default Login;