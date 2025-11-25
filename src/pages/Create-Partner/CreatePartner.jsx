import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const CreatePartner = () => {
    const { user } = use(AuthContext)

    const handleOnSubmit = (e) => {
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
        console.log("mr Input: ", name, photo, time, location, email, ratting, PartnerCount, Subject, StudyMode, ExperienceLevel)

        const newObj = {
            name, photo, time, location, email, ratting, PartnerCount, Subject, StudyMode, ExperienceLevel
        };

        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after send data", data);
                if (data.insertedId) {
                    toast.success("the partner profile is created.");
                    e.target.reset();
                }
            })
    }


    return (
        <div className='my-15 '>
            <form onSubmit={handleOnSubmit}>
                <fieldset className='w-8/12 mx-auto border border-blue-600 rounded p-5 bg-blue-200'>
                    <section className='flex gap-5 border border-blue-400 rounded p-3 mb-5 bg-blue-300'>
                        {/* input */}
                        <div className='border border-gray-200 p-5 rounded bg-primary'>
                            {/* name */}
                            <label className="label font-bold text-black ">Name</label>
                            <input type="text" name='name' className="input w-full " placeholder='Full name' />

                            {/* photo */}
                            <label className="label font-bold text-black my-3">Profile Image URL</label>
                            <input type="text" name='photo' className="input w-full " placeholder='User Profile Image' />

                            {/* time */}
                            <label className="label font-bold text-black my-3">Availability Time</label>
                            <input type="text" name='time' className="input w-full " placeholder='e.g., “Evening 6–9 PM”' />

                            {/* location */}
                            <label className="label font-bold text-black my-3">Location</label>
                            <input type="text" name='location' className="input w-full " placeholder='City, area, or preferred location.' />

                            {/* email */}
                            <label className="label font-bold text-black my-3">Email</label>
                            <input type="email" name="email" defaultValue={user?.email} readOnly className="input w-full " />

                            {/* ratting */}
                            <label className="label font-bold text-black my-3">Rating</label>
                            <input type="number" name="ratting" defaultValue={0} readOnly className="input w-full " />

                            {/* PartnerCount */}
                            <label className="label font-bold text-black my-3">Partner Count</label>
                            <input type="number" name="PartnerCount" defaultValue={0} readOnly className="input w-full " />
                        </div>
                        {/* select */}
                        <div className='grid grid-cols-1 gap-5 border border-gray-200 p-5 pr-10 rounded bg-primary'>
                            <div>
                                <label className="label font-bold text-black">Subject</label>
                                <select name="Subject" className='border' >
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
                                <select name="StudyMode" className='border'>
                                    <option defaultValue="Select">Select</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div>
                                <label className="label font-bold text-black">Experience Level</label>
                                <select name="ExperienceLevel" className='border'>
                                    <option defaultValue="Select">Select</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>

                        </div>
                    </section>

                    <input type="submit" value="Create User" className="btn btn-secondary text-white w-full " />

                </fieldset>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CreatePartner;