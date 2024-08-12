import React from 'react';
import { FaUniversity, FaGraduationCap, FaCertificate, FaDatabase, FaLinux, FaCode } from 'react-icons/fa';

const EducationAndCertificates = ({ education, certificates }) => (
    <section className='p-6 bg-white rounded-lg shadow-md'>
        <header className='mb-4'>
            <h2 className='text-3xl font-bold flex items-center'>
                <FaUniversity className='text-blue-600 mr-2' /> Education
            </h2>
        </header>
        {education.map((item, index) => (
            <div key={index} className='mb-4'>
                <h3 className='text-2xl font-semibold flex items-center'>
                    {item.icon} {item.title}
                </h3>
                <p className='text-lg'>{item.description}</p>
                <p className='text-sm text-gray-600 flex justify-end'>
                    <span>{item.date}</span>
                </p>
            </div>
        ))}
        <hr className='my-6 border-gray-300' />
        <header className='mb-4'>
            <h2 className='text-3xl font-bold flex items-center'>
                <FaCertificate className='text-purple-600 mr-2' /> Certificates
            </h2>
        </header>
        <ul className='list-disc pl-5'>
            {certificates.map((item, index) => (
                <li key={index} className='mb-2 flex items-center justify-between'>
                    <span className='flex items-center'>
                        {item.icon} {item.title}
                    </span>
                    <span className='text-sm text-gray-600 flex justify-between'>{item.date}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default EducationAndCertificates;
