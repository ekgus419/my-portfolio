import { createPortal } from "react-dom";

export const Tooltip = ({ position, children }) => {
    const style = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-60%, 0)',
    };

    return (
        <div 
            className='absolute bg-gray-800 text-white p-2 rounded text-sm'
            style={style}
        >
            {children}
        </div>
    );
};
