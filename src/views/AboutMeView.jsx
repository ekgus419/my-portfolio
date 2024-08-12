import React, { useState } from 'react';
import { SkillsInfo, ContactInfo } from '../data/AboutMeData';
import AboutMe from '../components/AboutMe';

const AboutMeView = () => {
    const [tooltip, setTooltip] = useState(null);

    const handleMouseEnter = (e, message) => {
        setTooltip({ position: { x: e.clientX, y: e.clientY }, message });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    return (
        <AboutMe
            SkillsInfo={SkillsInfo} 
            ContactInfo={ContactInfo}
            handleMouseEnter={handleMouseEnter} 
            handleMouseLeave={handleMouseLeave} 
            tooltip={tooltip}
        />
    );
};

export default AboutMeView;
