import React from 'react';

const Footer = () => {
    const year = new Date();
    return (
        <div className='bg-bg-primary pt-7 pb-6  text-accent text-center font-semibold'>
            <h2>Copyright &copy; {year.getFullYear()} all right reserved</h2>
        </div>
    );
};

export default Footer;