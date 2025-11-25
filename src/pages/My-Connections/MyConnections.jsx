import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyConnections = () => {
    const { user } = use(AuthContext);
    const [existing, setExisting] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/request?RequesterEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("after fatching the data", data);
                    setExisting(data);
                })
        }
    }, [user?.email]);

    // handle delete:
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/request/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your partner request has been deleted.",
                                icon: "success"
                            });

                            const newData = existing.filter((newData) => newData._id !== id);
                            setExisting(newData);
                        }
                    })
            }
        });
    }

    // console.log(existing);

    return (
        <section className='my-15 max-w-7xl mx-auto'>
            <div className="overflow-x-auto bg-white rounded">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                NO.
                            </th>
                            <th>Partner Name and profile picture</th>
                            <th>Subject</th>
                            <th>Study Mode</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            existing.map((request, index) => <tr key={index}>
                                <th> {index + 1} </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={request.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{request.name}</div>
                                            <div className="text-sm opacity-50">Bangladesh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {request.Subject}

                                </td>
                                <td><span className="badge badge-ghost badge-sm">{request.StudyMode}</span></td>
                                <th>
                                    <button onClick={() => handleDelete(request._id)} className="btn border-red-200 text-red-500 btn-xs">delete<MdDeleteForever /> </button>
                                </th>
                                <th>
                                    <Link to={`/update/${request._id}`}><button className="btn bg-secondary text-white btn-xs">Update</button></Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyConnections;