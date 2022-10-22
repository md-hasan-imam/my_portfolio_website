import React from 'react';
import projectImg from '../assets/image/project images/home-page-automa.jpg'
import webicon from '../assets/image/icons/icons8-internet-50.png'
import githubicon from '../assets/image/icons/icons8-github-30.png'
import arrowicon from '../assets/image/icons/icons8-arrow-30.png'
import medicProprojectImg from '../assets/project image/medicPro/2.png';
import gymProprojectImg from '../assets/project image/gymnasium/2.png';


const Projects = () => {
    return (
        <section id='projects' className='py-24 bg-bg-primary'>
            <div className="container  mx-auto  px-3 sm:px:4 md:px-7 lg:px-20 tracking-wider">
                {/* section heading */}
                <h3 className='text-5xl font-semibold text-center pb-20 text-accent '>Recent Projects</h3>
                {/* section content  */}


                {/* medicpro starts */}
                <a href="https://medicpro-aa457.web.app/" target='_blank'>
                    <div className='lg:flex h-screen items-center group transition-all ease-linear duration-1000 order-2 lg:order-1'>
                        <div className="project_details my-auto  text-white ">
                            <div className='p-5'>
                                <h5 className='text-xs tracking-widest text-primary mb-3 ml-1 group-hover:text-accent '>Featured Project</h5>
                                <h3 className='text-3xl text-accent font-bold group-hover:text-primary transition-all ease-in duration-300 '>MedicPro </h3>
                                <h5 className=' mb-3 mt-2 max-w-xl'>Fully Responsive, Reusable and Dynamic MERN Stack project for a Pediatric Clinic </h5>

                                {/* features are here */}
                                <ul className='text-accent bg-bg-secondary rounded lg:p-5 pr-10 lg:-mr-20 relative  z-10'>
                                    <li>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px]  inline-block' />
                                        <p className='inline'>Single page application where only an authentic user can book
                                            an appointment for different treatments at different time slots.</p>
                                    </li>
                                    <li className='my-3'>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px]  inline-block' />
                                        <p className='inline'>The user can see all his appointments in his dashboard. A payment option for due
                                            appointments & visualization of Transaction id after payment is also applied.</p>
                                    </li>
                                    <li>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px] inline-block' />
                                        <p className='inline'>Developed admin functionalities to add a new doctor or remove a doctor. Only
                                            Admin holds the right to make other admin.</p>
                                    </li>
                                </ul>
                                {/* technologies used */}
                                <ul className='lg:max-w-3xl flex flex-wrap gap-3 my-4'>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># MongoDB</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Express</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Node JS</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Tailwind</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Firebase</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># JWT</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Stripe</p>
                                    </li>


                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># DaisyUI</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React-Query</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React-Hook-Form</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p>And so on...</p>
                                    </li>
                                </ul>
                                {/* links are here */}
                                <ul className=' flex  mt-6 gap-x-4 lg:gap-x-10 text-lg'>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://medicpro-aa457.web.app/" target='_blank'> <img src={webicon} alt="" className='w-6 mr-3 inline-block' />Live-site-link</a>
                                    </li>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://github.com/md-hasan-imam/medicpro-clinic-website" target='_blank'><img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Client-site</a>
                                    </li>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href='https://github.com/md-hasan-imam/medic-pro-server-side' target='_blank'>
                                            <img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Server-sit</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* project images are here */}
                        <div className="lg:w-full project_image rounded  grayscale group-hover:grayscale-0 transition-all ease-in duration-300">
                            <img src={medicProprojectImg} alt="" className='w-full rounded' />
                        </div>
                    </div>
                </a>
                {/* medicpro ends */}

                {/* automa starts */}
                <a href="https://automa-car-parts-manufacturer.web.app/" target='_blank'>
                    <div className='lg:flex h-screen items-center group transition-all ease-linear duration-1000 order-2 lg:order-1 my-16 text-end'>
                        <div className="lg:w-full project_image rounded  grayscale group-hover:grayscale-0 transition-all ease-in duration-300">
                            <img src={projectImg} alt="" className='w-full rounded' />
                        </div>
                        <div className="project_details my-auto  text-white">
                            <div className='p-5'>
                                <h5 className='text-xs tracking-widest text-primary mb-3 ml-1 group-hover:text-accent '>Featured Project</h5>
                                <h3 className='text-3xl text-accent font-bold group-hover:text-primary transition-all ease-in duration-300 '>Automa </h3>
                                <h5 className=' mb-3 mt-2 max-w-xl'>Car Parts Manufacturer's Dynamic MERN Stack website. </h5>

                                {/* features are here */}
                                <ul className='text-accent bg-bg-secondary rounded lg:p-5 pr-10 lg:-ml-20 relative  z-10'>
                                    <li>
                                        <p className='inline'>Only a logged in user will be able to order product.</p>
                                    </li>
                                    <li className='my-3'>
                                        <p className='inline'>Authentic user can see his orders. They can add and remove product fom dashboard. Option for adding a review and update information is also added for an authentic user.</p>
                                    </li>
                                    <li>
                                        <p className='inline'>If an Admin is logged in, He will see his Dashboard. Where he can make others as an Admin or snatch Admin power. Admin can add a new product and also can remove product that he want.</p>
                                    </li>
                                </ul>
                                {/* technologies used */}
                                <ul className='lg:max-w-3xl flex flex-wrap gap-3 my-4 justify-end'>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># HTML5</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># CSS3</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Tailwind</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># DaisyUI</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># JavaScript</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Node JS</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Express</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Heroku</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># MongoDB</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React-Query</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># React-Hook-Form</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Firebase</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p>And so on...</p>
                                    </li>
                                </ul>
                                {/* links are here */}
                                <ul className=' flex  mt-6 gap-x-4 lg:gap-x-10 text-lg justify-end'>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://automa-car-parts-manufacturer.web.app/" target='_blank'> <img src={webicon} alt="" className='w-6 mr-3 inline-block' />Live-site-link</a>
                                    </li>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://github.com/md-hasan-imam/manufacturing-company-website-client-side" target='_blank'><img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Client-site</a>
                                    </li>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href='https://github.com/md-hasan-imam/manufacturing-website-server-side' target='_blank'>
                                            <img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Server-sit</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* project images are here */}

                    </div>
                </a>
                {/* automa ends */}

                {/* gymnasium starts */}
                <a href="https://medicpro-aa457.web.app/" target='_blank'>
                    <div className='lg:flex h-screen items-center group transition-all ease-linear duration-1000 order-2 lg:order-1'>
                        <div className="project_details my-auto  text-white ">
                            <div className='p-5'>
                                <h5 className='text-xs tracking-widest text-primary mb-3 ml-1 group-hover:text-accent '>Featured Project</h5>
                                <h3 className='text-3xl text-accent font-bold group-hover:text-primary transition-all ease-in duration-300 '>Gymnasium </h3>
                                <h5 className=' mb-3 mt-2 max-w-xl'>Pixel perfect, fully responsive Gymnasium landing page</h5>

                                {/* features are here */}
                                <ul className='text-accent bg-bg-secondary rounded lg:p-5 pr-10 lg:-mr-20 relative  z-10'>
                                    <li>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px]  inline-block' />
                                        <p className='inline'>Pixel perfect fully responsive landing page</p>
                                    </li>
                                    <li className='my-3'>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px]  inline-block' />
                                        <p className='inline'>User can see training schedule in different days of the week.</p>
                                    </li>
                                    <li>
                                        <img src={arrowicon} alt="" className='w-5 mr-2 mb-[2px] inline-block' />
                                        <p className='inline'>Applied jQery to look more realistic and eyecatching</p>
                                    </li>
                                </ul>
                                {/* technologies used */}
                                <ul className='lg:max-w-3xl flex flex-wrap gap-3 my-4'>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># SASS</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># jQuery</p>
                                    </li>
                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># Bootstrap</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># HTML5</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p># CSS3</p>
                                    </li>

                                    <li className='px-3 text-sm text-black bg-primary-light  rounded '>
                                        <p>And so on...</p>
                                    </li>
                                </ul>
                                {/* links are here */}
                                <ul className=' flex  mt-6 gap-x-4 lg:gap-x-10 text-lg'>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://gymnasiumland.netlify.app" target='_blank'> <img src={webicon} alt="" className='w-6 mr-3 inline-block' />Live-site-link</a>
                                    </li>
                                    <li className='hover:text-primary text-base transition-all ease-in duration-200'>
                                        <a href="https://github.com/md-hasan-imam/gymnasium-website" target='_blank'><img src={githubicon} alt="" className='w-7 mr-3 inline-block' />Client-site</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* project images are here */}
                        <div className="lg:w-1/2 project_image rounded  grayscale group-hover:grayscale-0 transition-all ease-in duration-300">
                            <img src={gymProprojectImg} alt="" className='w-full rounded' />
                        </div>
                    </div>
                </a>
                {/* gymnasium ends */}
            </div>
            {/* <div className='flex justify-center mt-20'>
                <button className='bg-primary px-7 py-2 text-2xl rounded font-semibold hover:bg-primary-dark transition-all ease-in duration-300'> See All Projects</button>
            </div> */}
        </section>
    );
};

export default Projects;