import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const FindPartnerDetails = () => {
    const {user,} = use(AuthContext);
    // const data = useLoaderData();
    const { id } = useParams();
    const [getData, setGetData] = useState({});
    const [toggle, setToggle] = useState(true)

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


    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setGetData(data)
            })
    }, [id]);

    const newObj = {
        partnerId: id,
        RequesterEmail: user?.email,
        name,
        photo,
        Subject,
        StudyMode,
        time,
        location,
        ExperienceLevel,
        ratting,
        PartnerCount: getData.PartnerCount + 1,
        email,

    }

    const handleRequestBtn = () => {
        //post
        fetch("http://localhost:3000/request", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after sending the data", data);
                if(data.message){
                    toast.error("Reques is already send");
                    setToggle(false);
                }
                if(data.insertedId){
                    toast.success("Partner Request Sucessfull & data will be saved on databse");
                    const newData = {...getData, PartnerCount: parseInt(getData.PartnerCount) + 1};
                    setGetData(newData);
                }
            })

            
    }

    // console.log(getData);

    // console.log(id)
    return (
        <div>
            <div className='flex justify-center bg-white border border-gray-400 rounded p-3 my-15'>
                <div>
                    <h3>ID: {_id}</h3>
                    <div className='flex gap-8  '>
                        <div>
                            <img className='border border-amber-200 rounded w-[800px] h-[500px]' src={photo} alt="" />
                            <div className='flex justify-between items-center mt-4'>
                                <p className='font-semibold'>Available Time: {time}</p>
                                <p className='border border-amber-300 py-1 px-3 rounded font-semibold'>Rating: {ratting}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold'>Name: {name}</h3>
                            <h4 className='font-semibold mt-4'>Subject: {Subject}</h4>
                            <h4 className='font-semibold mt-4'>Experience Level: {ExperienceLevel}</h4>
                            <p className=' font-semibold mt-4'>Total Patner Count: {PartnerCount}</p>
                            <p className='font-semibold mt-4' mt-4>Study Mode: {StudyMode}</p>
                            <p className='font-semibold mt-4' mt-4>Location: {location}</p>
                            <p className='font-semibold mt-4'>Email: {email}</p>
                            <button onClick={handleRequestBtn} className='btn btn-secondary text-white mt-4' disabled={!toggle}>Send Partner Request</button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default FindPartnerDetails;