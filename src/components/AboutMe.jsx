import React from 'react';
import { Introduction } from './aboutme/Introduction';
import { SkillItem } from './aboutme/SkillItem';
import { Contact } from './aboutme/Contact';
import { Tooltip } from './aboutme/Tooltip';

const AboutMe = ({ SkillsInfo, ContactInfo, handleMouseEnter, handleMouseLeave, tooltip }) => {
    return (
        <section className='p-6 bg-white rounded-lg shadow-md relative'>
            <header>
                <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>About Me</h2>
                <p className='text-gray-600 mb-6'>제 소개를 드립니다.</p>
            </header>
            <Introduction />
            <hr className='my-4' />
            <section>
                <header>
                    <h3 className='text-2xl font-bold mb-2'>Skills</h3>
                </header>
                <div className='flex space-x-6 pl-3'>
                    {SkillsInfo.map(({ Icon, colorClass, message }, index) => (
                        <SkillItem
                            key={index}
                            Icon={Icon}
                            colorClass={colorClass}
                            onMouseEnter={(e) => handleMouseEnter(e, message)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </section>
            <hr className='my-4' />
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
