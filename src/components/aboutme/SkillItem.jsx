export const SkillItem = ({ Icon, colorClass, onMouseEnter, onMouseLeave }) => (
    <div
        className='relative group'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <Icon
            className={`text-4xl transition-colors duration-300 cursor-pointer ${colorClass} group-hover:text-opacity-80`}
        />
    </div>
);
