import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const routes = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = routes.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span onClick={() => setOpen(!open)} className='flex'>

                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden' ></Menu>
                }

                <ul className={`md:hidden duration-1000 absolute ${open ? 'top-13' : '-top-64'} bg-green-200`}>
                    {links}
                </ul>

                <h3 className='ml-4'>My NavBar</h3>
            </span>
            <ul className='hidden md:flex '>

                {
                    links
                }

            </ul>


            {/* <ul className='flex'>
                {
                    routes.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}



            {/* <ul className='flex gap-4'>
                <li><a href="/home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Blog">Blog</a></li>
            </ul> */}



            <button>Sign In</button>

        </nav>
    );
};

export default NavBar;