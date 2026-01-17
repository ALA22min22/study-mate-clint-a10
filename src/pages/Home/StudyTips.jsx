import React from 'react';

const StudyTips = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Proven Techniques to Beat Procrastination",
      category: "Productivity",
      date: "Oct 24, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Struggling to start? Discover the Pomodoro technique and other methods to boost your focus immediately."
    },
    {
      id: 2,
      title: "How to Find the Perfect Study Partner Online",
      category: "Guide",
      date: "Nov 12, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Finding a compatible study buddy can be tough. Here are the key traits you should look for in a partner."
    },
    {
      id: 3,
      title: "Mastering Exam Stress: A Student's Handbook",
      category: "Mental Health",
      date: "Dec 05, 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Exam season is stressful. Learn simple breathing exercises and mindfulness tips to stay calm and perform better."
    }
  ];

  return (
    <section id='story' className="">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className=" text-center my-16">
          <div className="">
            <h2 className="text-4xl font-bold mb-2 uppercase">Study Tips & Articles</h2>
            <p className="text-gray-500">
              Expert advice, study hacks, and latest news to help you ace your exams.
            </p>
          </div>
    
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Card Image */}
              <figure className="h-56 w-full overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </figure>
              
              {/* Card Content */}
              <div className="card-body">
                
                {/* Meta Info */}
                <div className="flex items-center gap-2 text-sm text-base-content/60 mb-2">
                  <span className="badge badge-ghost rounded-md">{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="card-title text-xl font-bold hover:text-primary cursor-pointer">
                  {blog.title}
                </h3>
                
                <p className="text-base-content/70 text-sm mt-2">
                  {blog.description}
                </p>

                {/* Read More Link */}
                <div className="card-actions justify-start mt-4">
                  <a href="#" className="link link-primary no-underline hover:underline font-semibold flex items-center gap-1 group">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudyTips;