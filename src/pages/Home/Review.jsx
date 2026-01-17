// import React from 'react';

// const Review = () => {
//     return (
//         <div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center p-15'>
//                 <div className='text-center hover:bg-black rounded-2xl p-5'>
//                     <img className='mx-auto' src="https://i.ibb.co.com/HTfQ1ys8/icons8-clock-50.png" alt="" />                  
//                     <h3 className='text-white text-3xl font-bold my-3'>5325</h3>
//                     <p className='text-white text-2xl'>Hours of Lessions</p>
//                 </div>
//                 <div className='text-center hover:bg-black rounded-2xl p-5'>
//                     <img className='mx-auto' src="https://i.ibb.co.com/5hhg8zQW/icons8-student-80.png" alt="" />                  
//                     <h3 className='text-white text-3xl font-bold my-3'>160</h3>
//                     <p className='text-white text-2xl'>Satisfied Students</p>
//                 </div>
//                 <div className='text-center hover:bg-black rounded-2xl p-5'>
//                     <img className='mx-auto' src="https://i.ibb.co.com/fGMVdbDw/icons8-laptop-50.png" alt="" />                  
//                     <h3 className='text-white text-3xl font-bold my-3'>530</h3>
//                     <p className='text-white text-2xl'>Courses</p>
//                 </div>
//                 <div className='text-center hover:bg-black rounded-2xl p-5'>
//                     <img className='mx-auto' src="https://i.ibb.co.com/4RdXXpyS/icons8-like-50.png" alt="" />                  
//                     <h3 className='text-white text-3xl font-bold my-3'>59</h3>
//                     <p className='text-white text-2xl'>Awards Won</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Review;


import React from 'react';
import { 
  ClockIcon, 
  UserGroupIcon, 
  ComputerDesktopIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const Review = () => {
  const stats = [
    {
      id: 1,
      title: "Hours of Lessons",
      count: "5,325",
      icon: <ClockIcon className="w-10 h-10" />,
    },
    {
      id: 2,
      title: "Satisfied Students",
      count: "160+",
      icon: <UserGroupIcon className="w-10 h-10" />,
    },
    {
      id: 3,
      title: "Courses Available",
      count: "530",
      icon: <ComputerDesktopIcon className="w-10 h-10" />,
    },
    {
      id: 4,
      title: "Awards Won",
      count: "59",
      icon: <TrophyIcon className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        
       
        

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div 
              key={item.id} 
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:bg-primary hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <div className="text-primary group-hover:text-white transition-colors">
                    {item.icon}
                </div>
              </div>

              {/* Count */}
              <h3 className="text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-white transition-colors">
                {item.count}
              </h3>

              {/* Title */}
              <p className="text-lg font-medium text-gray-500 group-hover:text-gray-100 transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;