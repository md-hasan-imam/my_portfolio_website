import React from 'react';

const Navbar = () => {
    return (
        <header id='home' className='bg-bg-primary'>
            <div className="container mx-auto">
                <nav className='flex justify-between items-center  px-3 sm:px-4 md:px-5 lg:px-3 py-10 bg-blue'>
                    <div className="brand">
                        <a href="#home">
                            <span className='text-4xl font-semibold text-secondary'>HASAN </span>
                            <span className='text-3xl text-accent'>IMAM</span>
                        </a>
                    </div>
                    <div className="navigation hidden lg:flex">
                        <ul className='nav-links text-md flex items-center gap-x-10 '>
                            <li><a href="#home" className='py-2 text-secondary hover:text-primary'> Home</a></li>
                            <li><a href="#about" className='py-2 text-secondary hover:text-primary'>About</a></li>
                            <li><a href="#projects" className='py-2 text-secondary hover:text-primary'>Projects</a></li>
                            <li><a href="#contact" className='py-2 text-secondary hover:text-primary'>Contact</a></li>
                            <li><a href="mailto:mdhasan.imam31@gmail.com" className='px-4 py-2 border border-primary text-md text-secondary hover:bg-primary hover:text-black transition-all ease-linear duration-300  rounded'>Send e-mail</a></li>
                        </ul>
                    </div>
                    {/* small and md devices */}
                    <div className="navigation  lg:hidden">
                        <input type="checkbox" id='navicon'/>
                        <label htmlFor="navicon">
                        </label>
                        <ul id='nav-small-device' className='w-full pt-2 pb-5 text-md bg-bg-secondary mx-auto text-center absolute top-[-100%] left-0 pr-4 z-50 transition-all ease-linear duration-1000 py-3'>
                            <li><a href="#home" className=' py-2 inline-block my-2 text-secondary hover:text-primary'>Home</a></li>
                            <li><a href="#about" className='py-2 inline-block my-2 text-secondary hover:text-primary'>About</a></li>
                            <li><a href="#projects" className='py-2 inline-block my-2 text-secondary hover:text-primary'>Projects</a></li>
                            <li><a href="#contact" className='py-2 inline-block my-2 text-secondary hover:text-primary'>Contact</a></li>
                            <li><a href="mailto:mdhasan.imam31@gmail.com" className='py-2 px-4  mt-2  inline-block border border-primary text-secondary hover:bg-primary hover:text-black transition-all ease-linear duration-300 font-semibold rounded'>Send e-mail</a></li>
                        </ul>
                    </div>
                </nav>
            </div>





            





        </header>

    );
};

export default Navbar;