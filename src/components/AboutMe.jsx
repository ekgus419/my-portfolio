import React from 'react';
import { Introduction } from './aboutme/Introduction';
import { Contact } from './aboutme/Contact';
import { Tooltip } from './aboutme/Tooltip';

const AboutMe = ({ SkillsInfo, ContactInfo, handleMouseEnter, handleMouseLeave, tooltip }) => {
    return (
        <section className='p-6 bg-white rounded-lg shadow-md relative'>
            <header>
                <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>About Me</h2>
            </header>
            <Introduction />
            <hr className='my-4' />
            <section className='my-6'>
                <header>
                    <h3 className='text-2xl font-bold mb-4'>Skills</h3>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6'>
                    {SkillsInfo.map(({ section, items }, index) => (
                        <div key={index}>
                            <h4 className='text-lg font-medium text-gray-800 mb-2'>{section}</h4>
                            <ul className='list-disc list-inside space-y-2 leading-relaxed text-gray-700'>
                                {items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <hr className='my-6' />
            <Contact ContactInfo={ContactInfo} />
            {tooltip && (
                <Tooltip position={tooltip.position}>
                    {tooltip.message}
                </Tooltip>
            )}
        </section>
    );
};

export default AboutMe;
