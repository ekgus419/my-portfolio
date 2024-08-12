export const Contact = ({ ContactInfo }) => (
    <section>
        <header>
            <h3 className='text-2xl font-bold mb-2'>Contact</h3>
        </header>
        <ul className='list-disc pl-3'>
            {ContactInfo.map(({ Icon, text }, index) => (
                <li key={index} className='flex items-center mb-2'>
                    <Icon className='mr-2 text-xl text-gray-500' />
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    </section>
);