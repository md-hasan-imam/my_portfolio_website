import React from 'react';

const CustomButton = ({children, href}) => {
    return (
        <div>
            <a href={href} className='mt-5 px-4 py-2 border border-primary text-md text-secondary hover:bg-primary hover:text-black transition-all ease-linear duration-300  rounded inline-block'>{children}</a>
        </div>
    );
};

export default CustomButton;