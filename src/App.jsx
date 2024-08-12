import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Career from './components/Career.jsx';
import EducationAndCertificates from './components/EducationAndCertificates.jsx';
import ToyProject from './components/ToyProject.jsx';
import MainContent from './components/MainContent.jsx';

const App = () => {
    return (
        <Router>
            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/education-and-certificates" element={<EducationAndCertificates />} />
                        <Route path="/toy-project" element={<ToyProject />} />
                    </Routes>
                </MainContent>
            </div>
        </Router>
    );
};

export default App;
