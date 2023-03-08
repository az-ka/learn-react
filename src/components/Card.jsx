function Card({ children }) {
    return <div className='max-w-xl bg-white rounded overflow-hidden shadow-lg mx-auto space-y-2 '>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='text-xl font-semibold p-4 border-b'>
            <h1>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return (
        <div className='leading-relaxed p-4 text-justify'>
            <h1>{children}</h1>
        </div>
    );
}

function Footer({ children }) {
    return <div className='bg-blue-100 p-4'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
