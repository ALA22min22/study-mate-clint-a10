import React, { Suspense } from 'react';
import TopPartner from './TopPartner';
import HowItWorks from './HowItWorks';
import Review from './Review';

const topPartner = fetch("http://localhost:3000/top-partners").then(res => res.json());

const Home = () => {
    return (
        <div >
            
                <section>
                    <div className="carousel w-full">
                        {/* Slide 1 */}
                        <div id="slide1" className="carousel-item relative w-full">
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage:
                                        `url(https://i.ibb.co.com/1GTR25HY/Pix-Verse-Image-Effect-prompt-Study-Smart-with-1.jpg)`,
                                }}
                            >
                                <div className="hero-overlay  "></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="hover:text-yellow-300">
                                        <h1 className="mb-5 text-7xl font-bold">Study Smart</h1>
                                        <p className="mb-5 text-2xl">
                                            Learn effectively with modern resources and collaborative tools.
                                        </p>
                                        <button className="btn btn-secondary">Start Learning</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div id="slide2" className="carousel-item relative w-full">
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage:
                                        "url(https://i.ibb.co.com/9kYs7QL1/Pix-Verse-Image-Effect-prompt-Study-partner-Co.jpg)",
                                }}
                            >
                                <div className="hero-overlay"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="hover:text-yellow-300">
                                        <h1 className="mb-5 text-7xl font-bold">Collaborate</h1>
                                        <p className="mb-5 text-2xl">
                                            Work together with peers to solve problems and grow knowledge.
                                        </p>
                                        <button className="btn btn-secondary">Join Group</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div id="slide3" className="carousel-item relative w-full">
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage:
                                        "url(https://i.ibb.co.com/9msxdnT0/Pix-Verse-Image-Effect-prompt-Studymate-Achieve.jpg)",
                                }}
                            >
                                <div className="hero-overlay"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-md hover:text-yellow-300">
                                        <h1 className="mb-5 text-7xl font-bold">Achieve Goals</h1>
                                        <p className="mb-5 text-2xl">
                                            Stay motivated and reach academic success step by step.
                                        </p>
                                        <button className="btn btn-secondary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                </section>

                <h3 className='text-4xl font-bold text-center mt-15 text-[#6c5ebf] '>Top Study Partners</h3>
                <section className='max-w-7xl mx-auto my-15'>
                    <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
                        <TopPartner topPartner={topPartner}></TopPartner>
                    </Suspense>
                </section>

                <h3 className='text-4xl font-bold text-center text-[#6c5ebf]  '>How It Works</h3>
                <section className=' bg-primary p-5 my-15'>
                    <HowItWorks></HowItWorks>
                </section>

                <h3 className='text-4xl font-bold text-center text-[#6c5ebf] '>Testimonials</h3>
                <section className=" bg-[url('https://i.ibb.co.com/H6ztMCb/Pix-Verse-Image-Effect-prompt-Study-image-with.jpg')] bg-cover bg-center w-full h-fit  p-10 my-15 ">
                    <Review></Review>
                </section>
            

        </div>
    );
};

export default Home;