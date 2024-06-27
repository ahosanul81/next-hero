"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    // console.log(pathName);
    // const navlinks = <>
    //     <li><a href="/">Home</a></li>
    //     <li><a href="/services">Services</a></li>
    //     <li><a href="/about">About</a></li>
    //     <li><a href="/contactUs">Contact Us</a></li>
    // </>

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'categories',
            path: '/categories'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
        {
            title: 'Album',
            path: '/album'
        },
        {
            title: 'Time',
            path: '/time'
        },
    ]

    const navLinks = links.map(link => <Link className={`${pathName === link.path && 'text-amber-700'}`} key={link.path} href={link.path}>{link.title}</Link>)


    if (pathName.includes('dashboard')) {
        return <div>
            <div className='bg-green-300 p-6'> Dashboard layout</div>
        
            <footer>
                dashboard footer
            </footer>
        </div>
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {/* {
                            links.map(link => <Link className={`${pathName && 'text-amber-700'}`} href={link.path}>{link.title}</Link>)
                        } */}
                        {/* {navLinks} */}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Next Hero</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {/* {
                        links.map(link => <Link className={`${pathName && 'text-amber-700'}`} href={link.path}>{link.title}</Link>)
                    } */}
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;