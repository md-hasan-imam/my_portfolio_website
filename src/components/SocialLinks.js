import React from 'react';

const SocialLinks = () => {
    return (
        <div className='hidden lg:block w-10 fixed left-12 bottom-24'>
            <ul className='social-links text-accent  mt-5 mb-2'>
                <li className="my-6">
                    <a href="https://github.com/md-hasan-imam">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" height="1.5em" width="1.5em" className=' transition-all ease-linear duration-200 hover:translate-y-[-3px] hover:text-primary'><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </li>
                <li className="my-8">
                    <a href="https://www.linkedin.com/in/md-hasan-imam-8207ba244/">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin" height="1.5em" width="1.5em" className=' transition-all ease-linear duration-200 hover:translate-y-[-3px] hover:text-primary'><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </li>
                <li className="my-8">
                    <a href="https://stackoverflow.com/users/19870267/md-hasan-imam">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="" stroke-linejoin="round" width="1.6em" height="1.6em" viewBox="0 0 24 24" className=' transition-all ease-linear duration-200 hover:translate-y-[-3px] hover:text-primary'><path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" /></svg>
                    </a>

                </li>

                <li className="mt-6 mb-6">
                    <a href="https://codepen.io/Hasan-imam">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" height="1.5em" width="1.5em" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen" className=' transition-all ease-linear duration-200 hover:translate-y-[-3px] hover:text-primary'><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;