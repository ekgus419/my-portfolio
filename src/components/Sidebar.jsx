import React from 'react';
import { FaUserAlt, FaBriefcase, FaGraduationCap, FaTools, FaFileAlt, FaBlog, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profile.jpg';

const Sidebar = () => (
    <aside className='w-1/6 bg-gray-100 text-gray-800 p-6 border-r border-gray-300 shadow-md h-screen flex flex-col 
        md:w-1/4 lg:w-1/6' style={{ minWidth: '200px' }} >
        <div className='mb-6 text-center'>
            <img src={profileImage} alt='채다현' className='w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto rounded-full mb-4' />
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-2'>채다현</h2>
            <p className='text-sm md:text-base lg:text-lg'>WEB DEVELOPER</p>
        </div>
        <nav className='p-0 mb-6'>
            <ul className='flex flex-col space-y-2'>
                <li><Link to="/" className="text-sm md:text-base lg:text-lg text-gray-800 focus:outline-none">About Me</Link></li>
                <li><Link to="/career" className="text-sm md:text-base lg:text-lg text-gray-800 focus:outline-none">Career</Link></li>
                <li><Link to="/toy-projects" className="text-sm md:text-base lg:text-lg text-gray-800 focus:outline-none">Toy Project</Link></li>
                <li><Link to="/education" className="text-sm md:text-base lg:text-lg text-gray-800 focus:outline-none">Edu & Certs</Link></li>
            </ul>
        </nav>
        <footer className='flex flex-row items-center justify-center space-x-4 mt-auto'>
            <a href='https://drive.google.com/file/d/1gM-HDtW7T_cUZd3hooNSRrLqCASp9kHI/view?usp=sharing' target='blank' className='flex items-center text-gray-700 hover:text-red-500'>
                <FaFileAlt className='mr-2 text-xl md:text-2xl' />
            </a>
            <a href='https://dh-0419.tistory.com' target='blank' className='flex items-center text-gray-700 hover:text-red-500'>
                <FaBlog className='mr-2 text-xl md:text-2xl' />
            </a>
            <a href='https://github.com/ekgus419' target='blank' className='flex items-center text-gray-700 hover:text-red-500'>
                <FaGithub className='mr-2 text-xl md:text-2xl' />
            </a>
            <a href='mailto:ekgus419@gmail.com' target='blank' className='flex items-center text-gray-700 hover:text-red-500'>
                <FaEnvelope className='mr-2 text-xl md:text-2xl' />
            </a>
        </footer>
    </aside>
);

export default Sidebar;
