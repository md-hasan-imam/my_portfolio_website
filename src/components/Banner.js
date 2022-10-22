import React from 'react';
import codingBannerImg from '../assets/image/Programming.gif';


const Banner = () => {
    return (
        <section id='#banner' className='bg-bg-primary py-20'>
            <div className="container mx-auto ">
                <div className="lg:flex justify-between gap-x-5 px-10  md:px-12 lg:px-20  pb-3 ">
                    {/* banner text */}
                    <div className="lg:w-1/2  flex items-center ">
                        <div className='lg:pl-5'>
                            <h5 className='text-5xl font-semibold text-accent'>HELLO!</h5>
                            <h1 className='text-6xl mt-3 mb-2 font-semibold text-secondary'>I AM HASAN</h1>
                            <h3 className='text-lg tracking-wide text-accent'>A Passionate web-developer with the knowledge of ReactJs, Redux, Typescript, ExpressJs, Nodejs, MongoDB and so on.</h3>
                            {/* Front-End Developer, Full-Stack Developer, <span className='text-primary'>MERN-Stack Developer,</span>   */}

                            <div>
                                <a href="https://drive.google.com/uc?id=1hOgBRU1ZYqltxjTehrzOBxPbeR4HVWOX&export=download" className='mt-5 lg:mt-9 inline-block text-primary underline underline-offset-2 hover:text-primary-dark transition-all ease-linear duration-200'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className=" animate-bounce -mb-2 inline-block mr-2 " height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg>DOWNLOAD RESUME</a>

                                <a href="mailto:mdhasan.imam31@gmail.com" className='mt-5 ml-6 inline-block text-secondary underline underline-offset-2 hover:text-primary transition-all ease-linear duration-200'>
                                    LET'S CHAT</a>
                            </div>

                        </div>
                    </div>
                    {/* banner image */}
                    <div className="w-3/5 lg:w-2/5 lg:ml-auto ">
                        <img src={codingBannerImg} alt="" className='w-4/5' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;