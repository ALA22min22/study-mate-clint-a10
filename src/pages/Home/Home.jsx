import React, { Suspense } from 'react';
import TopPartner from './TopPartner';
import HowItWorks from './HowItWorks';
import Review from './Review';
import FAQ from './FAQ';
import SubjectCategories from './SubjectCategories';
import StatsSection from './StatsSection';
import StudyTips from './StudyTips';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router';
import Contact from './Contact';
import { HashLink } from 'react-router-hash-link';

const topPartner = fetch("https://study-mate-server-beta.vercel.app/top-partners").then(res => res.json());

const Home = () => {
    return (
        <div className='bg-base-200'>

            <section className="relative group">
            {/* Carousel Container - 70% Viewport Height */}
            <div className="carousel w-full h-[70vh]">

                {/* ---------------- Slide 1: Study Smart ---------------- */}
                <div id="slide1" className="carousel-item relative w-full">
                    {/* Background Image */}
                    <img
                        src="https://i.ibb.co.com/1GTR25HY/Pix-Verse-Image-Effect-prompt-Study-Smart-with-1.jpg"
                        className="w-full h-full object-cover"
                        alt="Study Smart"
                    />
                    
                    {/* Professional Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 flex items-center justify-center">
                        <div className="hero-content text-center text-white px-4">
                            <div className="max-w-4xl space-y-6">
                                {/* Tagline Badge */}
                                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-bold tracking-wider uppercase mb-2 animate-bounce">
                                    🚀 Unlock Your Potential
                                </span>
                                
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                                    Study Smart, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                                        Learn Together
                                    </span>
                                </h1>
                                
                                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Experience a new way of learning with modern resources and real-time collaborative tools designed for your academic success.
                                </p>
                                
                                
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide3" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❮</a>
                        <a href="#slide2" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❯</a>
                    </div>
                </div>

                {/* ---------------- Slide 2: Collaborate ---------------- */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/9kYs7QL1/Pix-Verse-Image-Effect-prompt-Study-partner-Co.jpg"
                        className="w-full h-full object-cover"
                        alt="Collaborate"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 flex items-center justify-center">
                        <div className="hero-content text-center text-white px-4">
                            <div className="max-w-4xl space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent text-sm font-bold tracking-wider uppercase mb-2">
                                    🤝 Community First
                                </span>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                                    Find Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                        Perfect Partner
                                    </span>
                                </h1>
                                
                                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Don't study in isolation. Connect with peers globally, solve complex problems together, and grow your knowledge base.
                                </p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mt-4">
                                    <Link to={"/Find-Partners"} className="btn btn-accent border-none text-white btn-lg px-8 shadow-lg shadow-accent/40 transition-all hover:scale-105">
                                        Find Partner
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide1" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❮</a>
                        <a href="#slide3" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❯</a>
                    </div>
                </div>

                {/* ---------------- Slide 3: Achieve Goals ---------------- */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/9msxdnT0/Pix-Verse-Image-Effect-prompt-Studymate-Achieve.jpg"
                        className="w-full h-full object-cover"
                        alt="Achieve Goals"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 flex items-center justify-center">
                        <div className="hero-content text-center text-white px-4">
                            <div className="max-w-4xl space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold tracking-wider uppercase mb-2">
                                    🏆 Success Awaits
                                </span>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                                    Achieve <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                                        Academic Success
                                    </span>
                                </h1>
                                
                                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Stay motivated with our tracking tools. Set your goals, measure your progress, and celebrate every milestone.
                                </p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mt-4">
                                    <HashLink smooth to={"#how-work"} className="btn btn-primary border-none text-white btn-lg px-8 shadow-lg shadow-primary/40 transition-all hover:scale-105">
                                        Get Started Free
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide2" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❮</a>
                        <a href="#slide1" className="btn btn-circle glass hover:bg-white/20 text-white border-none text-xl">❯</a>
                    </div>
                </div>

            </div>

            {/* Optional: Bottom Indicator Dots */}
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5 z-30">
                <a href="#slide1" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all"></a> 
                <a href="#slide2" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all"></a> 
                <a href="#slide3" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all"></a> 
            </div>
        </section>

            <h3 className='text-4xl font-extrabold text-center my-16 uppercase '>Top Study Partners</h3>
            <section className=''>
                <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
                    <TopPartner topPartner={topPartner}></TopPartner>
                </Suspense>
            </section>


            <section>
                <SubjectCategories></SubjectCategories>
            </section>


            <div className="text-center my-16">
                <h2 className="text-4xl font-extrabold uppercase">Our Achievements</h2>
                <p className=" mt-2 text-gray-500">Numbers that speak for our quality</p>
            </div>

            <section className="relative w-full h-fit py-16 px-4 ">


                <div
                    className="absolute inset-0 bg-[url('https://i.ibb.co.com/H6ztMCb/Pix-Verse-Image-Effect-prompt-Study-image-with.jpg')] bg-cover bg-center"
                ></div>


                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10">
                    <Review></Review>
                </div>

            </section>

            <section>
                <StudyTips></StudyTips>
            </section>

            <h3 className='text-4xl font-extrabold text-center my-16 uppercase '>How It Works</h3>
            <section className=' bg-primary p-5'>
                <HowItWorks></HowItWorks>
            </section>

            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>


            <section>
                <FAQ></FAQ>
            </section>

            <h3 className='text-4xl font-extrabold text-center my-16 uppercase '>Who We Are</h3>
            <section>
                <AboutUs></AboutUs>
            </section>
            <section>
                <Contact></Contact>
            </section>



        </div>
    );
};

export default Home;