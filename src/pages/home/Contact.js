import React from 'react';


import contactImg from '../../assets/image/Email capture.gif';


const Contact = () => {


    const mailToHasan = (e) => {
        e.preventDefault();
        const messageFromPortfolio = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            details: e.target.details.value,
        }
        alert('message sent successfully');
        e.target.reset();
    }


    return (
        <section id='contact' className='bg-bg-secondary'>
            <div className='text-center pt-20 pb-10 '>
                <h3 className='text-xl text-white  mt-2'>Get in Touch</h3>
                <h3 className='text-4xl font-semibold text-accent'>Contact with Me</h3>
            </div>
            <div className="lg:flex gap-x-10 py-8 lg:pb-20 px-3 sm:px-10 lg:px-28  mx-auto">
                <div className="lg:w-1/2 text-left mt-2">
                    <div className="tracking-wide ">
                        {/* form card starts here */}
                        <form className="px-8" onSubmit={mailToHasan}>
                            <div className='flex justify-between gap-x-3'>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name='name'
                                    className=" w-full max-w-full pl-2 p-1 text-lg focus:outline-none rounded"
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Your email"
                                    className=" w-full max-w-full pl-2 p-1 text-lg focus:outline-none rounded"
                                />
                            </div>
                            <textarea
                                type="textarea"
                                name="details"
                                rows="10"
                                placeholder="Message"
                                className=" w-full max-w-full pl-2 p-1 text-lg focus:outline-none rounded mt-4 ::placeholder-shown:text-secondary"
                            />
                            <input type="submit" className='bg-primary  hover:bg-primary-dark px-6 py-2 mt-4 rounded font-semibold transition-all ease-in duration-200' value="Send Message" />
                        </form>
                    </div>
                </div>
                <div className="lg:w-1/2 mx-auto tracking-wider px-5 lg:px-0 mt-10 lg:mt-0">
                    <div>
                        <h1 className="text-2xl lg:text-2xl font-bold text-primary mb-2">Message Me</h1>
                        <h2 className='text-accent font-medium'>If you have any offer, queries, suggetions, opinion, objection - feel free to let me know through email, phone or any other socila media platform that I have shared in my portfolio.</h2>
                    </div>
                    <div>
                        
                    </div>
                    <ul className=' flex flex-col mt-6 gap-5 '>
                        <li className='flex gap-x-8 items-center '>
                            <i className="fa-solid fa-user text-2xl text-primary"></i>
                            <div>
                                <h3 className='text-white'>Name</h3>
                                <h4 className='text-accent'>Hasan Imam</h4>
                            </div>
                        </li>
                        <li className='flex gap-x-8  items-center '>
                            <i className="fa-solid fa-location-dot text-2xl text-primary"></i>
                            <div>
                                <h3 className='text-white'>Location</h3>
                                <h4 className='text-accent'>Jashore, Bangladesh</h4>
                            </div>
                        </li>
                        <li className='flex gap-x-8  items-center '>
                            <i className="fa-solid fa-phone text-2xl text-primary"></i>
                            <div>
                                <h3 className='text-white'>Call Me</h3>
                                <h4 className='text-accent'>+8801303462662</h4>
                            </div>
                        </li>
                        <li className='flex gap-x-8  items-center '>
                            <i className="fa-solid fa-at text-2xl text-primary"></i>
                            <div>
                                <h3 className='text-white'>Mail Me</h3>
                                <h4 className='text-accent'>mdhasan.imam31@gmail.com</h4>
                            </div>
                        </li>                    
                    </ul>

                </div>
            </div >

        </section>
    );
};

export default Contact;