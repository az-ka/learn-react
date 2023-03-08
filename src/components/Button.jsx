import clsx from 'clsx';

function Button(props) {
    const { className = 'bg-blue-600', text, children, type } = props;
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 flex items-center gap-2  text-white px-4 py-2 rounded my-3')}
        >
            {text || children}
        </button>
    );
}

export default Button;
