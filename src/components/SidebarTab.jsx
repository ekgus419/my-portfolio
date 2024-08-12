import React from 'react';

const SidebarTab = ({ selectedTab, label, onClick }) => (
    <li key={label}>
        <button
            className={`text-base ${selectedTab === label ? 'text-red-500' : 'text-gray-800'} focus:outline-none`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    </li>
);

export default SidebarTab;
