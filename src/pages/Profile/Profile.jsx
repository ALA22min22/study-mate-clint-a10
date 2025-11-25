import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className=' flex my-15 '>
            <div className='mx-auto'>
                <div className="hero bg-blue-300 rounded min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            
                                <img className='mx-auto rounded-4xl mb-5 w-4/12' src={user.photoURL? user.photoURL : user.photo} alt="" />
                            
                            <h1 className="text-5xl font-bold text-black">  {user.displayName? user.displayName : user.name}</h1>
                            <p className="py-6 text-red-500">
                                <span className='text-black font-bold'>Email:</span>  {user.email}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;