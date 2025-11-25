import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/Screenshot 2025-11-20 221855.png"
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';



const Header = () => {
    const { signOutClick, user } = use(AuthContext);

    const MyLink = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/Find-Partners"}>Find Partners</NavLink></li>

        {
            user &&
            <>
                <li><NavLink to={"/Create-Partner"}>Create Partner Profile</NavLink></li>
                <li><NavLink to={"/My-Connections"}>My Connections</NavLink></li>
            </>
        }
    </>

    const handleLogOut = () => {
        signOutClick()
            .then(result => {
                toast.success(`Logout Sucessfull`)
            })
            .catch(error => {
                toast.error(`LogOut Faild: ${error}`)
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
        <div className="navbar bg-blue-400 text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {MyLink}
                        <input onChange={handleToggle} type="checkbox" className="toggle toggle-info" />
                    </ul>
                </div>
                <div className='flex flex-col lg:flex-row items-center'>
                    <img className='w-[80px] rounded-full ' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl ">StudyMate</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {MyLink}
                </ul>
            </div>
            <div className="navbar-end gap-5 items-center">
                <div className='hidden md:block lg:block'>
                    <input onChange={handleToggle} type="checkbox" className="toggle toggle-info " />
                </div>
                <div>
                    {
                        user ? <>
                            <details className="dropdown">
                                <summary className="flex justify-center items-center"><img className='border border-red-400 rounded-full w-[40px] h-[40px]' src={user.photoURL ? user.photoURL : user.photo} alt="" /></summary>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 text-black font-semibold rounded-box z-1 w-52 p-2 shadow-sm">
                                    <Link to={"/profile"}><li><a>Profile</a></li></Link>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </details>
                        </>
                            : <img src="https://i.ibb.co.com/0yhqzYRg/icons8-profile-50.png" alt="" />
                    }
                </div>
                {
                    user ?
                        <a onClick={handleLogOut} className="btn btn-secondary text-white">LogOut</a>
                        : <Link to={"/auth/login"}><a className="btn btn-secondary text-white">Login</a></Link>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;