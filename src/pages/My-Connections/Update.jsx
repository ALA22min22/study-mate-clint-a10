import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Update = () => {
    const { user } = use(AuthContext);
    const oldData = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const scalaton = e.target;
        const name = scalaton.name.value;
        const photo = scalaton.photo.value;
        const time = scalaton.time.value;
        const location = scalaton.location.value;
        const email = scalaton.email.value;
        const ratting = scalaton.ratting.value;
        const PartnerCount = scalaton.PartnerCount.value;
        const Subject = scalaton.Subject.value;
        const StudyMode = scalaton.StudyMode.value;
        const ExperienceLevel = scalaton.ExperienceLevel.value;
        console.log("mr update Input: ", name, photo, time, location, email, ratting, PartnerCount, Subject, StudyMode, ExperienceLevel);

        const newUpdateData = {
            name, photo, time, location, email, ratting, PartnerCount, Subject, StudyMode, ExperienceLevel
        };

        //Axios patch data:
        try {
            await axios.patch(`http://localhost:3000/request/${oldData._id}`, newUpdateData)
                .then(update => {
                    console.log("After updateing the data", update);
                    if (update.data) {
                        toast.success("Update is Sucessfull");
                        setTimeout(() => navigate("/My-Connections"), 1500);
                    }
                })
        }
        catch (error) {
            console.log("Error the update", error)
        }

    }



    return (
        <div className='mt-15'>
            <h3 className='text-3xl font-bold text-[#6c5ebf] text-center'>UPDATE YOUR REQUEST PARTNER PROFILE</h3>
            <div className='my-15 '>
                <form onSubmit={handleUpdateSubmit} >
                    <fieldset className='w-8/12 mx-auto  rounded p-5 bg-red-200 shadow-2xl'>
                        <section className='flex flex-col md:flex-col lg:flex-row gap-5 border border-blue-400 rounded p-3 mb-5 bg-red-400'>
                            {/* input */}
                            <div className='border border-gray-200 p-5 rounded bg-primary'>
                                {/* name */}
                                <label className="label font-bold text-black ">Name</label>
                                <input type="text" name='name' className="input w-full " defaultValue={oldData.name} />

                                {/* photo */}
                                <label className="label font-bold text-black my-3">Profile Image URL</label>
                                <input type="text" name='photo' className="input w-full " defaultValue={oldData.photo} />

                                {/* time */}
                                <label className="label font-bold text-black my-3">Availability Time</label>
                                <input type="text" name='time' className="input w-full " defaultValue={oldData.time} />

                                {/* location */}
                                <label className="label font-bold text-black my-3">Location</label>
                                <input type="text" name='location' className="input w-full " defaultValue={oldData.location} />

                                {/* email */}
                                <label className="label font-bold text-black my-3">Email</label>
                                <input type="email" name="email" defaultValue={user?.email} readOnly className="input w-full " />

                                {/* ratting */}
                                <label className="label font-bold text-black my-3">Rating</label>
                                <input type="number" name="ratting" defaultValue={oldData.ratting} readOnly className="input w-full " />

                                {/* PartnerCount */}
                                <label className="label font-bold text-black my-3">Partner Count</label>
                                <input type="number" name="PartnerCount" defaultValue={oldData.PartnerCount} readOnly className="input w-full " />
                            </div>
                            {/* select */}
                            <div className='grid grid-cols-1 gap-5 border border-gray-200 p-5 pr-10 rounded bg-primary'>
                                <div>
                                    <label className="label font-bold text-black">Subject</label>
                                    <select name="Subject" defaultValue={oldData.Subject} className='border' >
                                        <option defaultValue="Select">Select</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Physics">Physics</option>
                                        <option value="English">English</option>
                                        <option value="Geography">Geography</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Music">Music</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label font-bold text-black">Study Mode</label>
                                    <select name="StudyMode" defaultValue={oldData.StudyMode} className='border'>
                                        <option defaultValue="Select">Select</option>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label font-bold text-black">Experience Level</label>
                                    <select name="ExperienceLevel" defaultValue={oldData.ExperienceLevel} className='border'>
                                        <option defaultValue="Select">Select</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                            </div>
                        </section>

                        <input type="submit" value="Update" className="btn btn-secondary text-white w-full " />

                    </fieldset>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Update;