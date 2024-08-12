import React from "react";

const Main = ({ children }) => {
    return (
    <main id="main" role="main" className="flex h-screen bg-gray-100">
        {children}
    </main>
    );
};

export default Main;