import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SkillsInfo, ContactInfo } from '../data/AboutMeData';

const Tooltip = ({ children, position }) => {
    return createPortal(
        <div
            className='absolute bg-black text-white text-sm p-2 rounded whitespace-nowrap z-50'
            style={{ top: position.top, left: position.left }}
        >
            {children}
        </div>,
        document.body
    );
};

const Introduction = () => (
    <section>
        <header>
            <h2 className='text-3xl font-bold mb-4'>안녕하세요,</h2>
        </header>
        <p>고객과의 소통을 통해 높은 만족도를 추구하는 채다현입니다.</p>
        <p>기술적 도전을 즐기며 성장하는 개발자로, 꼼꼼한 코드 검토와 문제 해결에 집중합니다.</p>
        <p>지속적인 기술 학습과 자기 개선을 통해 항상 더 나은 결과를 추구합니다.</p>
    </section>
);

const SkillItem = ({ Icon, colorClass, onMouseEnter, onMouseLeave }) => (
    <div
        className='relative group'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <Icon
            className={`text-4xl transition-colors duration-300 cursor-pointer ${colorClass} group-hover:text-opacity-80`}
        />
    </div>
);

const Contact = () => (
    <section>
        <header>
            <h3 className='text-2xl font-bold mb-2'>Contact</h3>
        </header>
        <ul className='list-disc pl-3'>
            {ContactInfo.map(({ Icon, text }, index) => (
                <li key={index} className='flex items-center mb-2'>
                    <Icon className='mr-2 text-xl text-gray-500' />
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    </section>
);

const AboutMe = () => {
    const [tooltip, setTooltip] = useState(null);

    const handleMouseEnter = (event, message) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX + rect.width / 2,
        };
        setTooltip({ message, position });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

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
            <Contact />
            {tooltip && (
                <Tooltip position={tooltip.position}>
                    {tooltip.message}
                </Tooltip>
            )}
        </section>
    );
};

export default AboutMe;
