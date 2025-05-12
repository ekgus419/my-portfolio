export const Contact = ({ ContactInfo }) => (
    <section>
        <header>
            <h3 className='text-2xl font-bold mb-4'>Contact</h3>
        </header>
        <div className='space-y-2'>
            {ContactInfo.map(({ Icon, text, color }, index) => (
                <div key={index} className='flex items-center gap-2'>
                    <Icon className={`text-xl ${color}`} />
                    <span className='text-gray-700'>{text}</span>
                </div>
            ))}
        </div>
    </section>
);