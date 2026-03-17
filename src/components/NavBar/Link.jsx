import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='md:mr-10 px-4 hover:bg-green-400'>
            <a href={route.path}> {route.name}</a>
        </li>
    );
};

export default Link;