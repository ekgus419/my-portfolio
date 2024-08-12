import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Career from './components/Career.jsx';
import EducationAndCertificates from './components/EducationAndCertificates.jsx';
import ToyProject from './components/ToyProject.jsx';
import MainContent from './components/MainContent.jsx';

const App = () => {
    const [selectedTab, setSelectedTab] = useState(<AboutMe />);

    const handleTabClick = (tabName) => {
        switch (tabName) {
            case 'AboutMe':
                setSelectedTab(<AboutMe />);
                break;
            case 'Career':
                setSelectedTab(<Career />);
                break;
            case 'EducationAndCertificates':
                setSelectedTab(<EducationAndCertificates />);
                break;
            case 'ToyProject':
                setSelectedTab(<ToyProject />);
                break;
            default:
                setSelectedTab(<AboutMe />);
                break;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar selectedTab={selectedTab} onTabClick={handleTabClick} />
            <MainContent selectedTab={selectedTab} />
        </div>
    );
};

export default App;
