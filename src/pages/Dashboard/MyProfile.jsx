import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// ফিক্স: আইকনগুলো 'react-icons/fa' থেকে ইমপোর্ট করতে হবে
import { FaUserEdit, FaSignOutAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'; 
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { user, signOutClick } = useContext(AuthContext);

    const handleLogout = () => {
        signOutClick()
            .then(() => {
                toast.success("Logged out successfully");
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
            <div className="card w-full max-w-lg bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                
                {/* Header Background */}
                <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500 relative"></div>

                {/* Profile Image Section */}
                <div className="flex justify-center -mt-16 relative">
                    <div className="avatar online">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-md">
                            <img 
                                src={user?.photoURL || "https://i.ibb.co/MgsTc52/user-placeholder.png"} 
                                alt="Profile" 
                                className='object-cover h-full w-full'
                            />
                        </div>
                    </div>
                </div>

                {/* User Info Section */}
                <div className="card-body text-center pt-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {user?.displayName || "User Name Not Found"}
                    </h2>
                    <p className="text-gray-500 font-medium flex justify-center items-center gap-2">
                        <FaEnvelope className="text-blue-500" /> {user?.email || "No Email Provided"}
                    </p>

                    <div className="divider my-4"></div>

                    {/* Detailed Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {/* User ID */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-400 uppercase font-bold">User ID</p>
                            <p className="text-sm font-mono text-gray-700 truncate" title={user?.uid}>
                                {user?.uid}
                            </p>
                        </div>

                        {/* Join Date */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-400 uppercase font-bold flex items-center gap-1">
                                <FaCalendarAlt className="text-green-500" /> Joined On
                            </p>
                            <p className="text-sm font-semibold text-gray-700">
                                {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toDateString() : "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    
                        
                        <button 
                            onClick={handleLogout} 
                            className="btn bg-red-500 hover:bg-red-600 text-white  border-none"
                        >
                            <FaSignOutAlt className="text-lg" /> Logout
                        </button>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;