import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutMeView from './views/AboutMeView';
import CareerView from './views/CareerView';
import EducationAndCertificatesView from './views/EducationAndCertificatesView';
import ToyProjectView from './views/ToyProjectView';

const App = () => {
    return (
        <Router>
            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                <main className="flex-1 flex flex-col h-full overflow-y-auto p-10 bg-gray-100">
                    <Routes>
                        <Route path="/" element={<AboutMeView />} />
                        <Route path="/career" element={<CareerView />} />
                        <Route path="/education" element={<EducationAndCertificatesView />} />
                        <Route path="/toy-projects" element={<ToyProjectView />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
