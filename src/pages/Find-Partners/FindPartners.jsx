import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import FindPartnerCard from './FindPartnerCard';
import axios from 'axios';

const FindPartners = () => {
    const { user } = useContext(AuthContext);
    const [findUser, setFindUser] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    // total user collection:
    // useEffect(() => {
    //     if (user?.email) {
    //         fetch("http://localhost:3000/user")
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setFindUser(data);
    //             })
    //     }
    // }, [user?.email])

    // sort By Exprence:
    useEffect(() => {
        if (user?.email) {
            const url = search.trim() !== ""
                ? `http://localhost:3000/user?subject=${search}&sort=${sortOrder}`
                : `http://localhost:3000/user?sort=${sortOrder}`;
            axios.get(url)
                .then(res => setFindUser(res.data))
                .catch(error => console.error(error));
        }
    }, [search, sortOrder, user?.email])

    // Clint-Side to apply sort /  Ascending and Descending order:-----------
    // const organizedData = [...findUser].sort((a, b) => {
    //     const lebelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
    //     if (sortOrder == "asc") {
    //         return lebelOrder[a.ExperienceLevel] - lebelOrder[b.ExperienceLevel];
    //     }
    //     else {
    //         return lebelOrder[b.ExperienceLevel] - lebelOrder[a.ExperienceLevel];
    //     }
    // })



    console.log(search);

    return (
        <div>

            <div className='flex justify-between items-center max-w-7xl mx-auto mt-15'>
                {/* DropDown */}
                <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By ➡️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setSortOrder("asc")}>Ascending</a></li>
                        <li><a onClick={() => setSortOrder("desc")}>Descending</a></li>
                    </ul>
                </div>
                {/* Search */}
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e)=> setSearch(e.target.value)} value={search} type="search" required placeholder="Search" />
                </label>

            </div>

            <div className='grid grid-cols-3 justify-center items-center gap-5 max-w-7xl mx-auto my-8'>
                {
                    findUser.map(data => <FindPartnerCard key={data._id} data={data}  ></FindPartnerCard>)
                }
            </div>
        </div>
    );
};

export default FindPartners;