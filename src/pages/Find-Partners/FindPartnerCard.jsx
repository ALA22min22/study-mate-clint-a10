import React from 'react';
import { Link } from 'react-router';

const FindPartnerCard = ({ data }) => {
    
    return (
        <div>
            <div className=' bg-blue-200 shadow-2xl rounded-tl-2xl rounded-br-2xl p-4 text-center w-[413px]  '>
                <img className="rounded w-fit h-[171px]  mx-auto my-4" src={data.photo} alt="" />
                <h2 className='text-3xl font-bold mb-2'>{data.name}</h2>
                <h2 className='text-2xl font-semibold '>Subjects: {data.Subject}</h2>
                <p className='my-3 btn border-amber-200 '>Study Mode: {data.StudyMode}</p>
                <br />
                <p className='mb-3 btn border-red-300 '>Experience Level: {data.ExperienceLevel}</p>
                <Link to={`/Find-Partners/${data._id}`}><button className='btn btn-secondary w-full text-white'>View Profile</button></Link>
            </div>
        </div>
    );
};

export default FindPartnerCard;