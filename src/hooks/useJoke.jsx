import axios from 'axios';
import { useEffect, useState } from 'react';

function useJoke(name) {
    const [joke, setJoke] = useState('');

    // Api Joke
    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            setJoke(data);
        };
        getJoke();
    }, []);
    return joke;
}

export default useJoke;
