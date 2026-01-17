// import React, { use } from 'react';
// import { NavLink } from 'react-router';

// const TopPartner = ({ topPartner }) => {
//     const top = use(topPartner);
//     // console.log(top)
//     return (
//         <div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//                 {
//                     top.map(partner => <>
//                         <div key={partner._id} className=' bg-primary shadow-2xl rounded-tl-2xl rounded-br-2xl p-4 text-center '>
//                             <img className="rounded-full w-40 h-40 mx-auto my-4" src={partner.profileimage} alt="" />
//                             <h2 className='text-2xl font-bold '>Subjects and skill: {partner.subject}</h2>
//                             <p className='my-3 btn border-amber-200 '>Ratings: {partner.rating}</p>
//                             <NavLink to={`/top-partner-details/${partner._id}`}><button className='btn btn-secondary w-full text-white'>View Profile</button></NavLink>
//                         </div>
//                     </>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default TopPartner;

import React, { use } from 'react';
import { NavLink } from 'react-router';

import Marquee from "react-fast-marquee";

const TopPartner = ({ topPartner }) => {

    const top = use(topPartner);

    return (
        <div id='top-partner' className=' bg-gray-50/50'> 
           
            <Marquee pauseOnHover={true} speed={50} gradient={false} className="py-4">

                <div className='flex gap-8 '>
                    {
                        top.map(partner => (

                            <div
                                key={partner._id}
                                // Option-2 Style Applied Here:
                                className='group relative flex flex-col bg-white rounded-2xl shadow-lg border border-blue-100 p-6 text-center w-80 sm:w-96 flex-shrink-0 mx-2 transition-all duration-300 hover:shadow-blue-200/50 hover:border-blue-300 hover:-translate-y-2'
                            >
                                {/* Profile Image with Ring Effect */}
                                <div className="mx-auto mb-4 relative">
                                    <div className="w-32 h-32 rounded-full border-4 border-blue-50 shadow-md overflow-hidden mx-auto p-1 bg-white">
                                        <img
                                            className="w-full h-full object-cover rounded-full"
                                            src={partner.profileimage}
                                            alt={partner.subject}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h2 className='text-xl font-bold text-gray-800 mb-1'>
                                        {partner.subject} Expert
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">Ready to collaborate</p>

                                    {/* Rating Badge - Soft Style */}
                                    <div className='inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full font-semibold text-sm border border-amber-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                        {partner.rating} / 5
                                    </div>
                                </div>

                                {/* Button - Outline Style */}
                                <div className='mt-6'>
                                    <NavLink to={`/top-partner-details/${partner._id}`}>
                                        <button className='btn btn-secondary btn-outline w-full rounded-xl hover:bg-secondary hover:text-white transition-colors font-bold'>
                                            View Profile
                                        </button>
                                    </NavLink>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default TopPartner;