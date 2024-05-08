'use client';

import React, { useEffect, useState } from 'react';
import NavLink from './components/navLink';
import './index.scss';

import Image from 'next/image';
import logo from '../images/logo.png';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const [canDisplayNavItems, setCanDisplayNavItems] = useState(true);

    const currentLocation = usePathname();
    //const { t } = useTranslation();

    const displayNavItems = (canDisplay: boolean) => {
        const navbarItemsResponsive = document.getElementById('navbar-items-behavior');
        const hambugerElement = document.getElementById('hamburger-element');
        if (navbarItemsResponsive && hambugerElement) {
            navbarItemsResponsive.style.left = canDisplay ? '0' : '-15000px';
            hambugerElement.classList.remove(canDisplay ? 'bar' : 'close');
            hambugerElement.classList.add(canDisplay ? 'close' : 'bar');
            setCanDisplayNavItems(!canDisplay); 
        }
    };

    const handleHambugerElement = () => {
        displayNavItems(canDisplayNavItems);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            displayNavItems(false);
        });
    }, []);

    return(
        <div id="navbar">
            <div className="header"> 
                <div className="logo">
                    <div className="wrapper-logo">
                        <Image className='img' height={65} src={logo} alt="logo-short"  />
                    </div>
                </div>
                <div className="hamburger-btn">
                    <div className="hamburger-btn-wrapper"  onClick={() => handleHambugerElement()}>
                        <div id="hamburger-element" className="bar" ></div>
                    </div>
                </div>
            </div>
            
            <div className="navbar-items">
                <ul className="navbar-items-wrapper">
                    <NavLink 
                        text={'home'} 
                        icon="fa-solid fa-house"
                        link="/"
                        selected={ currentLocation === '/' } />
                    <NavLink 
                        text={'about_me'}
                        icon="fa-solid fa-user"
                        link="/aboutMe" 
                        selected={ currentLocation === '/about' } />
                    <NavLink 
                        text={'skills'}
                        icon="fa-solid fa-gear"
                        link="/skills" 
                        selected={ currentLocation === '/skills' } />
                    <NavLink 
                        text={'projects'} 
                        icon="fa-solid fa-file"
                        link="/projects" 
                        selected={ currentLocation === '/projects'} />
                    <NavLink 
                        text={'contact'}
                        icon="fa-solid fa-envelope" 
                        link="/contact" 
                        selected={ currentLocation === '/contact' } />
                </ul>
            </div>
            <div id="navbar-items-behavior" className="navbar-items-responsive">
                <ul className="navbar-items-wrapper">
                    <NavLink 
                        icon="fa-solid fa-house"
                        link="/"
                        selected={ currentLocation === '/' } />
                    <NavLink 
                        icon="fa-solid fa-user"
                        link="/aboutMe" 
                        selected={ currentLocation === '/about' } />
                    <NavLink 
                        icon="fa-solid fa-gear"
                        link="/skills" 
                        selected={ currentLocation === '/skills' } />
                    <NavLink 
                        icon="fa-solid fa-file"
                        link="/projects" 
                        selected={ currentLocation === '/projects'} />
                    <NavLink 
                        icon="fa-solid fa-envelope" 
                        link="/contact" 
                        selected={ currentLocation === '/contact' } />
                </ul>
            </div>
        </div>
    );
};