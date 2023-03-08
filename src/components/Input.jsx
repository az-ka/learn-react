export default function Input({ type = 'text', ...props }) {
    return (
        <div>
            <input
                {...props}
                className='transition duration-300 w-full focus:outline-none focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
                type={type}
            />
        </div>
    );
}
