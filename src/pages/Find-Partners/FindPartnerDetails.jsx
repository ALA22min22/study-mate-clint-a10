// import React, { use, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import { AuthContext } from '../../Provider/AuthProvider';

// const FindPartnerDetails = () => {
//     const {user,} = use(AuthContext);
//     // const data = useLoaderData();
//     const { id } = useParams();
//     const [getData, setGetData] = useState({});
//     const [toggle, setToggle] = useState(true)

//     const {
//         _id,
//         name,
//         photo,
//         Subject,
//         StudyMode,
//         time,
//         location,
//         ExperienceLevel,
//         ratting,
//         PartnerCount,
//         email,
//     } = getData;


//     useEffect(() => {
//         fetch(`https://study-mate-server-beta.vercel.app/user/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setGetData(data)
//             })
//     }, [id]);

//     const newObj = {
//         partnerId: id,
//         RequesterEmail: user?.email,
//         name,
//         photo,
//         Subject,
//         StudyMode,
//         time,
//         location,
//         ExperienceLevel,
//         ratting,
//         PartnerCount: getData.PartnerCount + 1,
//         email,

//     }

//     const handleRequestBtn = () => {
//         //post
//         fetch("https://study-mate-server-beta.vercel.app/request", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(newObj)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("after sending the data", data);
//                 if(data.message){
//                     toast.error("Reques is already send");
//                     setToggle(false);
//                 }
//                 if(data.insertedId){
//                     toast.success("Partner Request Sucessfull & data will be saved on databse");
//                     const newData = {...getData, PartnerCount: parseInt(getData.PartnerCount) + 1};
//                     setGetData(newData);
//                 }
//             })

            
//     }

//     // console.log(getData);

//     // console.log(id)
//     return (
//         <div>
//             <div className='flex justify-center bg-white border border-gray-400 rounded p-3 my-15'>
//                 <div>
//                     <h3>ID: {_id}</h3>
//                     <div className='flex flex-col md:flex-row lg:flex-row gap-8  '>
//                         <div>
//                             <img className='border border-amber-200 rounded w-[800px] h-[500px]' src={photo} alt="" />
//                             <div className='flex justify-between items-center mt-4'>
//                                 <p className='font-semibold'>Available Time: {time}</p>
//                                 <p className='border border-amber-300 py-1 px-3 rounded font-semibold'>Rating: {ratting}</p>
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className='text-3xl font-bold'>Name: {name}</h3>
//                             <h4 className='font-semibold mt-4'>Subject: {Subject}</h4>
//                             <h4 className='font-semibold mt-4'>Experience Level: {ExperienceLevel}</h4>
//                             <p className=' font-semibold mt-4'>Total Patner Count: {PartnerCount}</p>
//                             <p className='font-semibold mt-4' mt-4>Study Mode: {StudyMode}</p>
//                             <p className='font-semibold mt-4' mt-4>Location: {location}</p>
//                             <p className='font-semibold mt-4'>Email: {email}</p>
//                             {
//                                 user && <button onClick={handleRequestBtn} className='btn btn-secondary text-white mt-4' disabled={!toggle}>Send Partner Request</button>
//                             }
//                         </div>
//                     </div>
//                     <ToastContainer />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FindPartnerDetails;

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { 
    MapPinIcon, 
    ClockIcon, 
    AcademicCapIcon, 
    UserGroupIcon, 
    EnvelopeIcon, 
    StarIcon
} from '@heroicons/react/24/solid';

const FindPartnerDetails = () => {
    
    const { user } = useContext(AuthContext); 
    const { id } = useParams();
    const [getData, setGetData] = useState({});
    
    // Loading states
    const [loading, setLoading] = useState(true); // Page loading
    const [requestLoading, setRequestLoading] = useState(false); // Button loading
    
    const [toggle, setToggle] = useState(true);
    
    // State for Image Gallery
    const [activeImg, setActiveImg] = useState(""); 
    const [galleryImages, setGalleryImages] = useState([]);

    const {
        _id,
        name,
        photo,
        Subject,
        StudyMode,
        time,
        location,
        ExperienceLevel,
        ratting,
        PartnerCount,
        email,
    } = getData;

    // --- 1. Mock Images for Gallery ---
    const demoImages = [
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=500", 
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500", 
        "https://images.unsplash.com/photo-1513258496098-b0a1ee4e38ee?auto=format&fit=crop&q=80&w=500" 
    ];

    // --- 2. Mock Reviews Data ---
    const staticReviews = [
        { id: 1, user: "Rahim Ahmed", rating: 5, comment: "Amazing study partner! Helped me clear my calculus concepts.", date: "2 days ago" },
        { id: 2, user: "Sarah Khan", rating: 4, comment: "Very punctual and disciplined. Highly recommended.", date: "1 week ago" },
        { id: 3, user: "Tanvir Hasan", rating: 5, comment: "Great resources and very friendly behavior.", date: "2 weeks ago" }
    ];

    useEffect(() => {
        setLoading(true);
        fetch(`https://study-mate-server-beta.vercel.app/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setGetData(data);
                // Check if photo exists before setting it
                const mainPhoto = data.photo || "https://via.placeholder.com/500";
                setActiveImg(mainPhoto);
                setGalleryImages([mainPhoto, ...demoImages]); 
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch user data:", err);
                setLoading(false);
            });
    }, [id]);

    const handleRequestBtn = () => {
        // 1. User Validation
        if (!user || !user.email) {
            toast.error("Please login first to send a request.");
            return;
        }

        setRequestLoading(true); // Start loading spinner on button

        // 2. Safely calculate Partner Count (Fixes NaN issue)
        const currentCount = getData.PartnerCount ? parseInt(getData.PartnerCount) : 0;

        const newObj = {
            partnerId: id,
            RequesterEmail: user.email,
            RequesterName: user.displayName || "Anonymous User",
            RequesterPhoto: user.photoURL || "",
            name: getData.name,
            photo: getData.photo,
            Subject: getData.Subject,
            StudyMode: getData.StudyMode,
            time: getData.time,
            location: getData.location,
            ExperienceLevel: getData.ExperienceLevel,
            ratting: getData.ratting,
            PartnerCount: currentCount + 1, // Safe increment
            email: getData.email, // Partner's email
        };

        console.log("Sending Data:", newObj); // For debugging

        fetch("https://study-mate-server-beta.vercel.app/request", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Response Data:", data);
            setRequestLoading(false); // Stop loading

            if (data.message) {
                toast.warning("Request already sent or exists!");
                setToggle(false);
            } else if (data.insertedId) {
                toast.success("Request sent successfully!");
                // Update local state to reflect new partner count
                const newData = { ...getData, PartnerCount: currentCount + 1 };
                setGetData(newData);
                setToggle(false);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error sending request:", error);
            setRequestLoading(false);
            toast.error("Failed to send request. Check your connection.");
        });
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* --- Section 1: Main Details Card --- */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Left: Image Gallery */}
                        <div className="lg:w-2/5 bg-gray-100 flex flex-col">
                            {/* Active Image */}
                            <div className="relative h-96 lg:h-full w-full">
                                <img 
                                    className="w-full h-full object-cover transition-opacity duration-500" 
                                    src={activeImg} 
                                    alt={name} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                {/* Rating Badge */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                                    <StarIcon className="w-5 h-5 text-yellow-500" />
                                    <span className="font-bold text-gray-800">{ratting || "N/A"}</span>
                                </div>
                            </div>
                            
                            {/* Thumbnails */}
                            <div className="flex gap-3 p-4 overflow-x-auto bg-white border-t border-gray-200">
                                {galleryImages.map((img, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setActiveImg(img)}
                                        className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImg === img ? 'border-secondary ring-2 ring-secondary/30' : 'border-transparent'}`}
                                    >
                                        <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info, Description & Specs */}
                        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col h-full">
                            
                            {/* Name & Headline */}
                            <div className="mb-6">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{name}</h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="badge badge-primary badge-outline font-semibold p-3">{Subject} Expert</span>
                                    <span className={`badge ${StudyMode === 'Online' ? 'badge-accent' : 'badge-secondary'} badge-outline font-semibold p-3`}>
                                        {StudyMode}
                                    </span>
                                </div>
                            </div>

                            {/* --- SECTION: Overview --- */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Overview</h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    Hi, I am {name}. I am a passionate learner focusing on <strong>{Subject}</strong>. 
                                    With an {ExperienceLevel} level of expertise, I am looking for a partner to 
                                    study during <strong>{time}</strong>.
                                </p>
                            </div>

                            {/* --- SECTION: Key Information --- */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Key Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><AcademicCapIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Experience Level</p><p className="font-bold text-gray-800">{ExperienceLevel}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-50 rounded-lg text-green-600"><ClockIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Available Time</p><p className="font-bold text-gray-800">{time}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><UserGroupIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Total Partners</p><p className="font-bold text-gray-800">{PartnerCount}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-red-50 rounded-lg text-red-600"><MapPinIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Location</p><p className="font-bold text-gray-800">{location}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3 md:col-span-2">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><EnvelopeIcon className="w-5 h-5" /></div>
                                        <div><p className="text-xs text-gray-500">Contact Email</p><p className="font-bold text-gray-800 break-all">{email}</p></div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                {user ? (
                                    <button 
                                        onClick={handleRequestBtn} 
                                        disabled={!toggle || requestLoading}
                                        className={`w-full py-4 rounded-xl text-lg font-bold transition-all shadow-xl flex justify-center items-center gap-2
                                            ${toggle && !requestLoading 
                                                ? 'bg-gradient-to-r from-secondary to-purple-600 text-white hover:scale-[1.02]' 
                                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                    >
                                        {requestLoading ? (
                                            <>
                                                <span className="loading loading-spinner loading-md"></span> Sending...
                                            </>
                                        ) : (
                                            toggle ? "Send Partner Request" : "Request Sent / Pending"
                                        )}
                                    </button>
                                ) : (
                                    <div className="alert alert-warning shadow-md rounded-xl">
                                        <span>Please login to send a request.</span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                {/* --- Section 2: User Reviews --- */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <StarIcon className="w-7 h-7 text-yellow-500" />
                        Community Reviews
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staticReviews.map((review) => (
                            <div key={review.id} className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 bg-gray-300 flex items-center justify-center">
                                            <span className="text-xl font-bold text-gray-600">{review.user.charAt(0)}</span>
                                        </div>
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
            <ToastContainer position="bottom-right" theme="colored" />
        </div>
    );
};

export default FindPartnerDetails;