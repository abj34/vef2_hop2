import React from 'react';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [username, setUsername] = useState('');
     useEffect(() => {
        if (typeof localStorage !== 'undefined') {
        setUsername(localStorage.getItem('username'));
        }
     }, []);
    return (
        <footer>
        {username ? <p>Logged in as {username}</p> : <p>Not logged in</p>}
        <p>Arnór Bragi Jóhannsson - Benedikt Þorsteinsson - Mikael Andri Ingason
            <br />Hópverkefni 2 - Vefforritun 2 - 2023
        </p> 
        </footer>
    );
};

export default Footer;