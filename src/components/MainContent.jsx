import React from 'react';

const MainContent = ({ children }) => (
    <main className="flex-1 flex flex-col h-full overflow-y-auto p-10 bg-gray-100">
        {children}
    </main>
);

export default MainContent;
