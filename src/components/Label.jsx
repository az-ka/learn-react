export default function Label({ value, children, ...props }) {
    return (
        <div>
            <label className='text-slate-600 mb-1 block' {...props}>
                {value || children}
            </label>
        </div>
    );
}
