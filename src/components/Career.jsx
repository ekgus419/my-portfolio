import React from 'react';

const CareerItemDetails = ({ details, expanded, onToggle, index }) => (
    <div className='mb-6'>
        <div className='flex flex-wrap gap-4 items-stretch'>
            {details.slice(0, expanded ? details.length : 3).map((item, itemIndex) => (
                <div key={itemIndex} className='flex-1 min-w-[280px] max-w-full sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.333%-1rem)]'>
                    <CareerItem item={item} />
                </div>
            ))}
        </div>
        {details.length > 3 && (
            <div className='text-right mt-4'>
                <button
                    onClick={() => onToggle(index)}
                    className='text-blue-500 hover:underline'
                >
                    {expanded ? '간단히 보기' : '더보기'}
                </button>
            </div>
        )}
    </div>
);

const CareerItem = ({ item }) => (
    <article className='flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
        <div className='p-4 flex flex-col flex-grow'>
        <div className='flex items-start mb-3'>
            <div className='mr-3 text-2xl'>{item.icon}</div>
            <h5 className='font-semibold text-md text-gray-900'>{item.subtitle}</h5>
        </div>
        <ul className='text-gray-700 list-disc pl-5 space-y-1 flex-grow'>
            {item.description.split('. ').map((desc, idx) => (
            desc && <li key={idx}>{desc.endsWith('.') ? desc : `${desc}.`}</li>
            ))}
        </ul>
        </div>
    </article>
);

const Career = ({ CareerInfo, expandedCareers, onToggle }) => {
    return (
        <section className='p-6 bg-white rounded-lg shadow-lg'>
            <header>
                <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>Career</h2>
                <p className='text-gray-600 mb-6'>다양한 프로젝트를 통해 문제를 해결하고, 실질적인 성과를 만들어냈습니다.</p>
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
                                onToggle={onToggle}
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
