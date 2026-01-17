import React from 'react';
import { Link } from 'react-router';

const FindPartnerCard = ({ data }) => {

    return (
        <div>
            <div className='group relative flex flex-col bg-white rounded-2xl shadow-lg border border-blue-100 p-5 transition-all duration-300 hover:shadow-blue-200/50 hover:border-blue-300'>

                {/* Profile Image - Circle Style */}
                <div className="mx-auto -mt-10 mb-4 relative">
                    <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={data.photo}
                            alt={data.name}
                        />
                    </div>
                    {/* Online Status Dot (Optional) */}
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                    <h2 className='text-xl font-bold text-slate-800'>{data.name}</h2>
                    <p className='text-primary font-medium text-sm mt-1'>{data.Subject}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
                        <div className="bg-blue-50 p-2 rounded-lg text-xs font-semibold text-blue-700">
                            Mode: {data.StudyMode}
                        </div>
                        <div className="bg-amber-50 p-2 rounded-lg text-xs font-semibold text-amber-700">
                            Exp: {data.ExperienceLevel}
                        </div>
                    </div>
                </div>

                {/* Button */}
                <Link to={`/Find-Partners/${data._id}`}>
                    <button className='btn btn-secondary btn-outline w-full rounded-xl hover:bg-secondary hover:text-white transition-colors'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FindPartnerCard;