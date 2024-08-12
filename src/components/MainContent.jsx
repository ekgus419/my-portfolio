import React from 'react';

const MainContent = ({ selectedTab }) => (
    <main className="flex-1 flex flex-col h-full overflow-y-auto p-10 bg-gray-100">
        {selectedTab}
    </main>
);

export default MainContent;
