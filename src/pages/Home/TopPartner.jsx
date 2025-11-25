import React, { use } from 'react';
import { NavLink } from 'react-router';

const TopPartner = ({ topPartner }) => {
    const top = use(topPartner);
    // console.log(top)
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    top.map(partner => <>
                        <div key={partner._id} className=' bg-primary shadow-2xl rounded-tl-2xl rounded-br-2xl p-4 text-center '>
                            <img className="rounded-full w-40 h-40 mx-auto my-4" src={partner.profileimage} alt="" />
                            <h2 className='text-2xl font-bold '>Subjects and skill: {partner.subject}</h2>
                            <p className='my-3 btn border-amber-200 '>Ratings: {partner.rating}</p>
                            <NavLink to={`/top-partner-details/${partner._id}`}><button className='btn btn-secondary w-full text-white'>View Profile</button></NavLink>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default TopPartner;