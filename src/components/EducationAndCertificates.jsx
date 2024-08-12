import React from 'react';
import { FaUniversity, FaGraduationCap, FaCertificate, FaDatabase, FaLinux, FaCode } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const EducationAndCertificates = () => (
    <section className='p-6 bg-white rounded-lg shadow-md'>
        <header className='mb-4'>
            <h2 className='text-3xl font-bold flex items-center'>
                <FaUniversity className='text-blue-600 mr-2' /> Education
            </h2>
        </header>
        <div className='mb-4'>
            <h3 className='text-2xl font-semibold flex items-center'>
                <FaGraduationCap className='text-green-600 mr-2' /> Korea National Open University
            </h3>
            <p className='text-lg'>컴퓨터 과학과 졸업</p>
            <p className='text-sm text-gray-600'>2019.09 - 2022.02</p>
        </div>
        <div>
            <h3 className='text-2xl font-semibold flex items-center'>
                <FaCode className='text-orange-600 mr-2' /> NCS Java Hybrid App Development
            </h3>
            <p className='text-lg'>직업 능력 개발 훈련 과정 수료</p>
            <p className='text-sm text-gray-600'>2016.06 - 2016.12</p>
        </div>
        <hr className='my-6 border-gray-300' />
        <header className='mb-4'>
            <h2 className='text-3xl font-bold flex items-center'>
                <FaCertificate className='text-purple-600 mr-2' /> Certificates
            </h2>
        </header>
        <ul className='list-disc pl-5'>
            <li className='mb-2 flex items-center'>
                <IoMdCheckmarkCircle className='text-green-600 mr-2' /> 정보처리기사
            </li>
            <li className='mb-2 flex items-center'>
                <FaDatabase className='text-blue-600 mr-2' /> 데이터 분석 준전문가(ADsP)
            </li>
            <li className='mb-2 flex items-center'>
                <FaLinux className='text-gray-600 mr-2' /> 리눅스 마스터 2급
            </li>
        </ul>
    </section>
);

export default EducationAndCertificates;
