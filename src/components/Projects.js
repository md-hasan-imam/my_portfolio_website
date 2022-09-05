import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/image/project images/automa responsive 1.jpg'
import projectImg2 from '../assets/image/project images/automa responsive 2.jpg'
import webicon from '../assets/image/icons/icons8-internet-50.png'
import githubicon from '../assets/image/icons/icons8-github-30.png'
import arrowicon from '../assets/image/icons/icons8-arrow-30.png'


const Projects = () => {
    return (
        <section id='projects' className='py-24 bg-bg-primary'>
            <div className="container  mx-auto  px-3 sm:px:4 md:px-7 lg:px-20 tracking-wider">
                {/* section heading */}
                <h3 className='text-5xl font-semibold text-center pb-20 text-accent '>My Recent Projects</h3>
                {/* section content  */}
                <div className='lg:flex  group transition-all ease-linear duration-1000 order-2 lg:order-1'>

                    <div className="project_details my-auto  text-white ">
                        <div className='p-5'>
                            <h5 className='text-sm tracking-widest text-primary mb-3 ml-1 group-hover:text-accent '>Featured Project</h5>
                            <h3 className='text-5xl text-accent font-bold group-hover:text-primary transition-all ease-in duration-300 '>Automa </h3>
                            <h5 className='text-xl mb-5 max-w-xl'>Responsive, reusable and dynamic MERN Stack website for a Car Parts Manufacturer. </h5>

                            {/* features are here */}
                            <ul className='text-accent bg-bg-secondary rounded lg:p-5 pr-10 lg:-mr-20 relative  z-10'>
                                <li>
                                    <img src={arrowicon} alt="" className='w-5 mr-2 inline-block' />
                                    <p className='inline'>Only a logged in user will be able to order product.</p>
                                </li>
                                <li className='my-3'>
                                    <img src={arrowicon} alt="" className='w-5 mr-2 inline-block' />
                                    <p className='inline'>Authentic user can see his orders. They can add and remove product fom dashboard. Option for adding a review and update information is also added for an authentic user.</p>
                                </li>
                                <li>
                                    <img src={arrowicon} alt="" className='w-5 mr-2 inline-block' />
                                    <p className='inline'>If an Admin is logged in, He will see his Dashboard. Where he can make others as an Admin or snatch Admin power. Admin can add a new product and also can remove product that he want.</p>
                                </li>
                            </ul>
                            {/* technologies used */}
                            <ul className='lg:max-w-3xl flex flex-wrap gap-3 my-4'>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># HTML5</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># CSS3</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Tailwind</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># JavaScript</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># React</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Node JS</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Express</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># JWT</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Heroku</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># MongoDB</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># DaisyUI</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Stripe</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># React-Query</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># React-Hook-Form</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p># Firebase</p>
                                </li>
                                <li className='px-3 text-black bg-primary-light  rounded '>
                                    <p>And so on...</p>
                                </li>
                            </ul>
                            {/* links are here */}
                            <ul className=' flex  mt-6 gap-x-4 lg:gap-x-10 text-lg'>
                                <li className='hover:text-primary transition-all ease-in duration-200'>
                                    <Link  to='https://automa-car-parts-manufacturer.web.app/'> <img src={webicon} alt="" className='w-6 mr-3 inline-block' />Live-site-link</Link>
                                </li>
                                <li className='hover:text-primary transition-all ease-in duration-200'>
                                    <Link to='https://github.com/md-hasan-imam/manufacturing-company-website-client-side'><img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Client-site</Link>
                                </li>
                                <li className='hover:text-primary transition-all ease-in duration-200'>
                                    <Link to='https://github.com/md-hasan-imam/manufacturing-website-server-side'>
                                    <img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Server-site</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* project images are here */}
                    <div className="project_image lg:w-5/6  bg-bg-gray group-hover:bg-primary-dark rounded order-1 lg:order-2 grayscale group-hover:grayscale-0 transition-all ease-in duration-300 py-3">
                        <div className='flex flex-col mt-4'>
                            <img src={projectImg} alt="" className='w-full inline-block' />
                            <img src={projectImg2} alt="" className='w-full inline-block' />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Projects;