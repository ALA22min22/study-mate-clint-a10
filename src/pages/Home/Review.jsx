import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-2 justify-center items-center p-15'>
                <div className='text-center hover:bg-black rounded-2xl p-5'>
                    <img className='mx-auto' src="https://i.ibb.co.com/HTfQ1ys8/icons8-clock-50.png" alt="" />                  
                    <h3 className='text-white text-3xl font-bold my-3'>5325</h3>
                    <p className='text-white text-2xl'>Hours of Lessions</p>
                </div>
                <div className='text-center hover:bg-black rounded-2xl p-5'>
                    <img className='mx-auto' src="https://i.ibb.co.com/5hhg8zQW/icons8-student-80.png" alt="" />                  
                    <h3 className='text-white text-3xl font-bold my-3'>160</h3>
                    <p className='text-white text-2xl'>Satisfied Students</p>
                </div>
                <div className='text-center hover:bg-black rounded-2xl p-5'>
                    <img className='mx-auto' src="https://i.ibb.co.com/fGMVdbDw/icons8-laptop-50.png" alt="" />                  
                    <h3 className='text-white text-3xl font-bold my-3'>530</h3>
                    <p className='text-white text-2xl'>Courses</p>
                </div>
                <div className='text-center hover:bg-black rounded-2xl p-5'>
                    <img className='mx-auto' src="https://i.ibb.co.com/4RdXXpyS/icons8-like-50.png" alt="" />                  
                    <h3 className='text-white text-3xl font-bold my-3'>59</h3>
                    <p className='text-white text-2xl'>Awards Won</p>
                </div>
            </div>
        </div>
    );
};

export default Review;