// import React from 'react';
// import { useLoaderData } from 'react-router';

// const DetailsTP = () => {
//     const data = useLoaderData();
//     console.log(data);

//     const {
//         _id,
//         name,
//         profileimage,
//         subject,
//         studyMode,
//         availabilityTime,
//         location,
//         experienceLevel,
//         rating,
//         patnerCount,
//         email,
//     } = data;

//     return (
//         <div className='flex justify-baseline border border-gray-400 rounded p-3 my-15'>
//             <div>
//                 <h3>ID: {_id}</h3>
//                 <div className='flex gap-8  '>
//                     <div>
//                         <img className='rounded w-[900px]' src={profileimage} alt="" />
//                         <div className='flex justify-between items-center mt-4'>
//                             <p className='font-semibold'>Available Time: {availabilityTime}</p>
//                             <p className='border border-amber-300 py-1 px-3 rounded font-semibold'>Rating: {rating}</p>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className='text-3xl font-bold'>Name: {name}</h3>
//                         <h4 className='font-semibold mt-4'>Subject: {subject}</h4>
//                         <h4 className='font-semibold mt-4'>Experience Level: {experienceLevel}</h4>
//                         <p className=' font-semibold mt-4'>Total Patner Count: {patnerCount}</p>
//                         <p className='font-semibold mt-4' mt-4>Study Mode: {studyMode}</p>
//                         <p className='font-semibold mt-4' mt-4>Location: {location}</p>
//                         <p className='font-semibold mt-4'>Email: {email}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>     
        
//     );
// };

// export default DetailsTP;

import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { 
    MapPinIcon, 
    ClockIcon, 
    AcademicCapIcon, 
    UserGroupIcon, 
    EnvelopeIcon, 
    StarIcon,
    ComputerDesktopIcon
} from '@heroicons/react/24/solid';

const DetailsTP = () => {
    // 1. Data from Router Loader
    const data = useLoaderData();

    // 2. Destructuring Data (Using your specific variable names)
    const {
        _id,
        name,
        profileimage,    // Note: Previously 'photo'
        subject,         // Note: Previously 'Subject' (capital S)
        studyMode,
        availabilityTime,// Note: Previously 'time'
        location,
        experienceLevel,
        rating,          // Note: Previously 'ratting'
        patnerCount,     // Note: Previously 'PartnerCount'
        email,
    } = data;

    // 3. State for Image Gallery
    const [activeImg, setActiveImg] = useState(profileimage);
    
    // 4. Mock Data for "Extra Features" (Gallery & Reviews)
    const demoImages = [
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=500", 
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1513258496098-b0a1ee4e38ee?auto=format&fit=crop&q=80&w=500" 
    ];

    const staticReviews = [
        { id: 1, user: "Rahim Ahmed", rating: 5, comment: "Amazing study partner! Helped me clear my calculus concepts.", date: "2 days ago" },
        { id: 2, user: "Sarah Khan", rating: 4, comment: "Very punctual and disciplined. Highly recommended.", date: "1 week ago" },
        { id: 3, user: "Tanvir Hasan", rating: 5, comment: "Great resources and very friendly behavior.", date: "2 weeks ago" }
    ];

    // Ensure active image matches loaded data initially
    useEffect(() => {
        if(profileimage) {
            setActiveImg(profileimage);
        }
    }, [profileimage]);

    // Combine main image with demos for the gallery strip
    const galleryImages = profileimage ? [profileimage, ...demoImages] : demoImages;

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* --- Section 1: Main Details Card --- */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Left: Image Gallery */}
                        <div className="lg:w-2/5 bg-gray-100 flex flex-col">
                            {/* Active Image */}
                            <div className="relative h-96 lg:h-[500px] w-full group">
                                <img 
                                    className="w-full h-full object-cover transition-opacity duration-500" 
                                    src={activeImg} 
                                    alt={name} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                
                                {/* Rating Badge */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1 z-10">
                                    <StarIcon className="w-5 h-5 text-yellow-500" />
                                    <span className="font-bold text-gray-800">{rating || "N/A"}</span>
                                </div>
                            </div>
                            
                            {/* Thumbnails Strip */}
                            <div className="flex gap-3 p-4 overflow-x-auto bg-white border-t border-gray-200 scrollbar-hide">
                                {galleryImages.map((img, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setActiveImg(img)}
                                        className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all 
                                        ${activeImg === img ? 'border-blue-500 ring-2 ring-blue-500/30 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info, Description & Specs */}
                        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col h-full">
                            
                            {/* Header: Name & Badges */}
                            <div className="mb-6">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{name}</h2>
                                    <span className="text-xs font-mono text-gray-400 border border-gray-200 rounded px-2 py-1">ID: {_id.slice(-6)}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="badge badge-primary badge-outline font-semibold p-3 gap-1">
                                        <AcademicCapIcon className="w-4 h-4"/> {subject}
                                    </span>
                                    <span className={`badge ${studyMode === 'Online' ? 'badge-accent' : 'badge-secondary'} badge-outline font-semibold p-3 gap-1`}>
                                        <ComputerDesktopIcon className="w-4 h-4"/> {studyMode}
                                    </span>
                                </div>
                            </div>

                            {/* --- ADDED SECTION: Overview/Description (Dynamic) --- */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">About Partner</h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    Hi, I am {name}. I am a passionate learner currently focusing on <strong>{subject}</strong>. 
                                    I have an {experienceLevel} level of expertise and I am looking for a partner to 
                                    study during <strong>{availabilityTime}</strong>. I believe in collaborative learning and creating a productive study environment.
                                </p>
                            </div>

                            {/* --- SECTION: Key Information/Specs --- */}
                            <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Key Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><AcademicCapIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Experience</p><p className="font-bold text-gray-800">{experienceLevel}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600"><ClockIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Availability</p><p className="font-bold text-gray-800">{availabilityTime}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><UserGroupIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Partners</p><p className="font-bold text-gray-800">{patnerCount} Connected</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-red-100 rounded-lg text-red-600"><MapPinIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Location</p><p className="font-bold text-gray-800">{location}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3 md:col-span-2 border-t border-gray-200 pt-4 mt-2">
                                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><EnvelopeIcon className="w-5 h-5" /></div>
                                        <div className="w-full">
                                            <p className="text-xs text-gray-500">Contact Email</p>
                                            <p className="font-bold text-gray-800 break-all">{email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          

                        </div>
                    </div>
                </div>

                {/* --- ADDED SECTION: Reviews --- */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <StarIcon className="w-7 h-7 text-yellow-500" />
                        Student Reviews
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staticReviews.map((review) => (
                            <div key={review.id} className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                                        {review.user.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.user}</h4>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsTP;