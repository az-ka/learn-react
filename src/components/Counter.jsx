import { useState } from 'react';
import Button from './Button';

export default function Counter({ counter, setCounter }) {
    function handleClickCount() {
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div className='flex gap-x-2 space-x-2 justify-center'>
            <Button onClick={handleClickCount}>Count + 1</Button>
            <Button
                onClick={() => {
                    handleClickCount();
                    handleClickCount();
                    handleClickCount();
                }}
            >
                Count + 3
            </Button>
        </div>
    );
}
