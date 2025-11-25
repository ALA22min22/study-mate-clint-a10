import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsTP = () => {
    const data = useLoaderData();
    console.log(data);

    const {
        _id,
        name,
        profileimage,
        subject,
        studyMode,
        availabilityTime,
        location,
        experienceLevel,
        rating,
        patnerCount,
        email,
    } = data;

    return (
        <div className='flex justify-baseline border border-gray-400 rounded p-3 my-15'>
            <div>
                <h3>ID: {_id}</h3>
                <div className='flex gap-8  '>
                    <div>
                        <img className='rounded w-[900px]' src={profileimage} alt="" />
                        <div className='flex justify-between items-center mt-4'>
                            <p className='font-semibold'>Available Time: {availabilityTime}</p>
                            <p className='border border-amber-300 py-1 px-3 rounded font-semibold'>Rating: {rating}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>Name: {name}</h3>
                        <h4 className='font-semibold mt-4'>Subject: {subject}</h4>
                        <h4 className='font-semibold mt-4'>Experience Level: {experienceLevel}</h4>
                        <p className=' font-semibold mt-4'>Total Patner Count: {patnerCount}</p>
                        <p className='font-semibold mt-4' mt-4>Study Mode: {studyMode}</p>
                        <p className='font-semibold mt-4' mt-4>Location: {location}</p>
                        <p className='font-semibold mt-4'>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsTP;