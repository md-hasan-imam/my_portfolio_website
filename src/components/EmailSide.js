import React from 'react';

const EmailSide = () => {
    return (
        <div className='hidden lg:block w-10 fixed right-12 bottom-24'>
        <ul className='email-side  mt-5 mb-2'>
            <li className="mb-2 text-lg ml-3 tracking-wide  text-accent transition-all ease-linear duration-200 hover:translate-y-[-3px] hover:text-primary">
                <a href='mailto:mdhasan.imam31@gmail.com' style={{writingMode: 'vertical-rl'}}>mdhasan.imam31@gmail.com</a>
            </li>
        </ul>
    </div>
    );
};

export default EmailSide;