import React, { useState } from 'react';
import { CareerInfo } from '../data/CareersData';

const CareerItem = ({ item }) => (
    <article className='flex-1 min-w-[280px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
        <div className='p-4 flex items-start'>
            <div className='mr-3 text-2xl'>{item.icon}</div>
            <div>
                <h5 className='font-semibold text-md text-gray-900 p-2 rounded-md mb-2'>{item.subtitle}</h5>
                <p className='text-gray-700'>{item.description}</p>
            </div>
        </div>
    </article>
);

const CareerItemDetails = ({ details, expanded, toggleDetail, index }) => (
    <div className='mb-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {details.slice(0, expanded ? details.length : 3).map((item, itemIndex) => (
                <CareerItem key={itemIndex} item={item} />
            ))}
        </div>
        {details.length > 3 && (
            <div className='text-right mt-4'>
                <button
                    onClick={() => toggleDetail(index)}
                    className='text-blue-500 hover:underline'
                >
                    {expanded ? '간단히 보기' : '더보기'}
                </button>
            </div>
        )}
    </div>
);

const Career = () => {
    const [expandedCareers, setExpandedCareers] = useState({});

    const toggleDetail = (index) => {
        setExpandedCareers(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className='p-6 bg-gray-50 rounded-lg shadow-lg'>
            <header>
                <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>Career</h2>
                <p className='text-gray-600 mb-6'>다양한 프로젝트를 통해 얻은 경험과 성과를 소개합니다.</p>
            </header>
            <hr className='my-4 border-gray-300' />
            <div className='flex flex-wrap gap-6'>
                {CareerInfo.map((career, careerIndex) => (
                    <div key={careerIndex} className='w-full'>
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-xl font-semibold text-gray-700'>{career.title}</h3>
                            <span className='text-gray-500'>{career.period}</span>
                        </div>
                        {career.details.map((detail, detailIndex) => (
                            <CareerItemDetails
                                key={detailIndex}
                                details={detail.items}
                                expanded={expandedCareers[careerIndex]}
                                toggleDetail={toggleDetail}
                                index={careerIndex}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
