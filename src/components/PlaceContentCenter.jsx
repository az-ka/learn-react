export default function PlaceContentCenter({ children }) {
    return (
        <div className='bg-gray-800 '>
            <div className='bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg w-full space-y-5 pb-5'>{children}</div>
            </div>
        </div>
    );
}
