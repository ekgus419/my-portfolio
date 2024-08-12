import React, { useState } from 'react';
import Career from '../components/Career';
import { CareerInfo } from '../data/CareersData';

const CareerView = () => {
    const [expandedCareers, setExpandedCareers] = useState({});

    const toggleDetail = (index) => {
        setExpandedCareers(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <Career
            CareerInfo={CareerInfo}
            expandedCareers={expandedCareers}
            onToggle={toggleDetail}
        />
    );
};

export default CareerView;
