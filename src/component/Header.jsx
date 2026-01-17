// import React, { use, useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router';
// import logo from "../assets/Screenshot 2025-11-20 221855.png"
// import { AuthContext } from '../Provider/AuthProvider';
// import { toast, ToastContainer } from 'react-toastify';



// const Header = () => {
//     const { signOutClick, user } = use(AuthContext);

//     const MyLink = <>
//         <li><NavLink to={"/"}>Home</NavLink></li>
//         <li><NavLink to={"/Find-Partners"}>Find Partners</NavLink></li>

//         {
//             user &&
//             <>
//                 {/* <li><NavLink to={"/Create-Partner"}>Create Partner Profile</NavLink></li>
//                 <li><NavLink to={"/My-Connections"}>My Connections</NavLink></li> */}
//                 <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
//             </>
//         }
//     </>

//     const handleLogOut = () => {
//         signOutClick()
//             .then(result => {
//                 toast.success(`Logout Sucessfull`)
//             })
//             .catch(error => {
//                 toast.error(`LogOut Faild: ${error}`)
//             })
//     }

//     const handleToggle = (e) => {
//         if (e.target.checked) {
//             document.querySelector("html").setAttribute('data-theme', 'dark');
//         }
//         else {
//             document.querySelector("html").setAttribute('data-theme', 'light')
//         }
//     }

//     return (
//         <div className="navbar bg-blue-400 text-white shadow-sm sticky top-0 z-50">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {MyLink}
//                         <input onChange={handleToggle} type="checkbox" className="toggle toggle-info" />
//                     </ul>
//                 </div>
//                 <div className='flex flex-col lg:flex-row items-center'>
//                     <img className='w-[80px] rounded-full ' src={logo} alt="" />
//                     <a className="btn btn-ghost text-xl ">StudyMate</a>
//                 </div>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu  menu-horizontal px-1">
//                     {MyLink}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-5 items-center">
//                 <div className='hidden md:block lg:block'>
//                     <input onChange={handleToggle} type="checkbox" className="toggle toggle-info " />
//                 </div>
//                 <div>
//                     {
//                         user ? <>
//                             <details className="dropdown">
//                                 <summary className="flex justify-center items-center"><img className='border border-red-400 rounded-full w-[40px] h-[40px]' src={user.photoURL ? user.photoURL : user.photo} alt="" /></summary>
//                                 <ul tabIndex="-1" className="dropdown-content menu bg-base-100 text-black font-semibold rounded-box z-1 w-52 p-2 shadow-sm">
//                                     <Link to={"/profile"}><li><a>Profile</a></li></Link>
//                                     <li><a onClick={handleLogOut}>Logout</a></li>
//                                 </ul>
//                             </details>
//                         </>
//                             : <img src="https://i.ibb.co.com/0yhqzYRg/icons8-profile-50.png" alt="" />
//                     }
//                 </div>
//                 {
//                     user ?
//                         <a onClick={handleLogOut} className="btn btn-secondary text-white">LogOut</a>
//                         : <Link to={"/auth/login"}><a className="btn btn-secondary text-white">Login</a></Link>
//                 }
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Header;


import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/Screenshot 2025-11-20 221855.png"
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import {  NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router';

const Header = () => {
    const { signOutClick, user } = useContext(AuthContext);
    const loacation = useLocation();
    

    // Active Link Style Helper
    const getLinkClass = ({ isActive }) =>
        isActive
            ? "font-bold text-yellow-300 border-b-2 border-yellow-300 px-3 py-1 transition-all duration-300"
            : "font-medium text-white hover:text-yellow-200 hover:bg-white/10 px-3 py-1 rounded-md transition-all duration-300";

    const MyLink = <>
        <li><NavLink to={"/"} className={getLinkClass}>Home</NavLink></li>
        <li><NavLink to={"/Find-Partners"} className={getLinkClass}>Find Partners</NavLink></li>
        <li><NavLink to={"/about"} className={getLinkClass}>About-US</NavLink></li>
        <li><NavHashLink smooth to={"/#contact"} className= {
            location.hash === "#contact" 
            ? "font-bold text-yellow-300 border-b-2 border-yellow-300 px-3 py-1 transition-all duration-300"
            : "font-medium text-white hover:text-yellow-200 hover:bg-white/10 px-3 py-1 rounded-md transition-all duration-300  "
        }
        >Contact</NavHashLink></li>
        

        {
            user &&
            <>
                <li><NavLink to={"/dashboard/profile"} className={getLinkClass}>Dashboard</NavLink></li>
                <li><NavLink to={"/privacyPolicy"} className={getLinkClass}>Privacy Policy</NavLink></li>
            </>
        }
    </>

    const handleLogOut = () => {
        signOutClick()
            .then(() => {
                toast.success(`Logout Successful`)
            })
            .catch(error => {
                toast.error(`LogOut Failed: ${error}`)
            })
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            document.querySelector("html").setAttribute('data-theme', 'dark');
        }
        else {
            document.querySelector("html").setAttribute('data-theme', 'light')
        }
    }

    return (
        // Professional Navbar Container
        <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-primary shadow-lg backdrop-blur-md bg-opacity-95 text-white transition-all duration-300">

            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-secondary text-gray-800 rounded-box z-1 mt-3 w-52 p-4 shadow-xl gap-2">
                        {MyLink}
                        <div className="divider my-1"></div>
                        <div className="flex items-center justify-between px-2">
                            <span className="text-sm font-semibold">Theme</span>
                            <input onChange={handleToggle} type="checkbox" className="toggle toggle-sm toggle-primary" />
                        </div>
                    </ul>
                </div>

                {/* Logo Section */}
                <Link to="/" className='flex items-center gap-2 group cursor-pointer'>
                    <img className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 group-hover:border-yellow-300 transition-all duration-300' src={logo} alt="StudyMate Logo" />
                    <span className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-yellow-100 transition-colors">StudyMate</span>
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 items-center"> 
                    {MyLink}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2  items-center">

                {/* Theme Toggle (Desktop) */}
                <div className='hidden lg:flex items-center gap-2 mr-2'>
                    <label className="swap swap-rotate hover:scale-110 transition-transform">
                        <input onChange={handleToggle} type="checkbox" />
                        {/* Sun icon */}
                        <svg className="swap-on fill-current w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* Moon icon */}
                        <svg className="swap-off fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" /></svg>
                    </label>
                </div>

                {/* User Profile / Login */}
                <div>
                    {
                        user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-white ring-offset-base-100 ring-offset-2 hover:ring-yellow-300 transition-all">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL || user.photo || "https://i.ibb.co.com/0yhqzYRg/icons8-profile-50.png"} alt="User" />
                                    </div>
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu p-2 shadow-2xl bg-white text-gray-800 rounded-box w-52 mt-4 z-[100] border border-gray-100">
                                    <li className="menu-title px-4 py-2 text-indigo-600 font-bold border-b mb-2">{user.displayName || 'User'}</li>
                                    <li><Link to={"/dashboard/profile"} className="hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100">Profile</Link></li>
                                    <li><Link to={"/dashboard"} className="hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100">Dashboard</Link></li>
                                    <li className='mt-2 border-t pt-2'><button onClick={handleLogOut} className="text-red-500 hover:bg-red-50">Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <>

                               <div className='flex flex-col lg:flex-row gap-2'>
                                 <Link to={"/auth/login"}>
                                    <button className="btn bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-800 border-none px-6 rounded-full font-bold shadow-md transition-all transform hover:scale-105">
                                        Login
                                    </button>
                                </Link>
                                <Link to={"/auth/login"}>
                                    <button className="btn bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-800 border-none px-6 rounded-full font-bold shadow-md transition-all transform hover:scale-105">
                                        Demo User
                                    </button>
                                </Link>
                               </div>

                            </>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;