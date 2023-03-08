import { IconBrandFacebook, IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';
import Input from './components/Input';
import Label from './components/Label';
import PlaceContentCenter from './components/PlaceContentCenter';
import useJoke from './hooks/useJoke';

function App() {
    const [user, setUser] = useState([]);
    const [counter, setCounter] = useState(0);
    const [form, setForm] = useState({ firstname: '', lastname: '' });
    const [allname, setAllName] = useState([]);
    const joke = useJoke('Yae');

    // Api Users
    useEffect(() => {
        async function getUsers() {
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users');
                setUser(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getUsers();
    }, []);

    function handleClick() {
        setForm({ firstname: 'Yae Miko', lastname: 'Bin Khotimah' });
    }

    function submit(e) {
        e.preventDefault();
        setAllName((preventAllName) => [
            ...preventAllName,
            {
                id: Math.floor(Math.random() * Date.now()),
                firstname: form.firstname,
                lastname: form.lastname,
                status: false,
            },
        ]);
        console.log(form);
    }

    function handleStatus(id) {
        const updateAllName = allname.map((form) => {
            if (id === form.id) {
                return { ...form, status: !form.status };
            }

            return form;
        });

        setAllName(updateAllName);
        console.log(id);
    }

    function handleRemove(id) {
        const removeName = allname.filter((form) => form.id !== id);
        setAllName(removeName);
        console.log(id);
    }

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <PlaceContentCenter>
            <h1 className=' text-white text-xl text-center'>Hello World</h1>
            <img
                src='https://w0.peakpx.com/wallpaper/1024/997/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg'
                className='rounded mx-auto'
            />
            <Card>
                <Card.Title>
                    {form.firstname ? form.firstname + ' |' : null} {form.lastname ? form.lastname + ' |' : null} {counter}
                </Card.Title>
                <Card.Body>
                    <div>Jokes : {joke.value}</div>
                    <div>Total User = {user.length}</div>
                    <div>
                        {user.length ? (
                            <div>
                                <ol>
                                    {' '}
                                    {user.map((users) => (
                                        <li key={users.id}>
                                            {' '}
                                            {users.name} ({users.username}){' '}
                                        </li>
                                    ))}{' '}
                                </ol>
                            </div>
                        ) : (
                            'kosong'
                        )}
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <Label htmlFor='firstname' value={'First Name'} />
                            <Input value={form.firstname} onChange={onChange} id={'firstname'} name={'firstname'} />
                        </div>
                        <div>
                            <Label htmlFor='lastname' value={'Last Name'} />
                            <Input value={form.lastname} onChange={onChange} id={'lastname'} name={'lastname'} />
                        </div>

                        <Button type={'submit'}>Submit</Button>
                    </form>
                    {allname.length > 0 ? (
                        <ol className='space-y-2'>
                            {allname.map((form) => (
                                <li key={form.id} className='flex items-center justify-between'>
                                    <span>
                                        {form.firstname} {form.lastname}{' '}
                                        {form.status ? (
                                            <span className='bg-blue-100 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white'>
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className='bg-red-100 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white'>
                                                Pasif
                                            </span>
                                        )}
                                    </span>
                                    <div className='flex items-center gap-x-2'>
                                        <Button onClick={() => handleStatus(form.id)}>Change Status</Button>
                                        <Button onClick={() => handleRemove(form.id)}>Remove</Button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : null}
                    <div>You have {allname.length} name</div>
                </Card.Body>
                <Card.Footer>
                    <div className='flex gap-x-2 space-x-2 justify-center'>
                        <Button onClick={handleClick}>Change Name</Button>
                        <Counter counter={counter} setCounter={setCounter} />
                    </div>
                </Card.Footer>
            </Card>
            <div className='flex gap-x-2 space-x-2 justify-center'>
                <Button onClick={() => console.log('Sign In')} type='submit'>
                    <IconBrandFacebook />
                    Facebook
                </Button>
                <Button className='bg-black' onClick={() => console.log('Logout')} type='button'>
                    <IconBrandGithub />
                    Github
                </Button>
                <Button className='bg-green-600'>
                    <IconBrandWhatsapp />
                    Whatsapp
                </Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
