import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavLink from './components/navLink';

import logo from '../../images/logo.png';

const Navbar = () => {

    const [canDisplayNavItems, setCanDisplayNavItems] = useState(true);

    const currentLocation = useLocation().pathname;
    const { t } = useTranslation();

    const displayNavItems = (canDisplay) => {
        const navbarItemsResponsive = document.getElementById('navbar-items-behavior');
        const hambugerElement = document.getElementById('hamburger-element');
        navbarItemsResponsive.style.display = canDisplay ? 'block' : 'none';
        hambugerElement.classList.remove(canDisplay ? 'bar' : 'close');
        hambugerElement.classList.add(canDisplay ? 'close' : 'bar');
        setCanDisplayNavItems(!canDisplay);
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
                        <img src={logo} alt="logo-short" />
                    </div>
                </div>
                <div className="hamburger-btn">
                    <div className="hamburger-btn-wrapper">
                        <div id="hamburger-element" className="bar" onClick={() => handleHambugerElement()} ></div>
                    </div>
                </div>
            </div>
            
            <div className="navbar-items">
                <ul className="navbar-items-wrapper">
                    <NavLink 
                        text={t('home')} 
                        icon="home-outline"
                        link="/"
                        selected={ currentLocation === '/' } />
                    <NavLink 
                        text={t('about_me')}
                        icon="person-outline"
                        link="/about" 
                        selected={ currentLocation === '/about' } />
                    <NavLink 
                        text={t('skills')}
                        icon="settings-outline"
                        link="/skills" 
                        selected={ currentLocation === '/skills' } />
                    <NavLink 
                        text={t('projects')} 
                        icon="document-outline"
                        link="/projects" 
                        selected={ currentLocation === '/projects'} />
                    <NavLink 
                        text={t('contact')}
                        icon="mail-outline" 
                        link="/contact" 
                        selected={ currentLocation === '/contact' } />
                </ul>
            </div>
            <div id="navbar-items-behavior" className="navbar-items-responsive">
                <ul className="navbar-items-wrapper">
                    <NavLink 
                        icon="home-outline"
                        link="/"
                        selected={ currentLocation === '/' } />
                    <NavLink 
                        icon="person-outline"
                        link="/about" 
                        selected={ currentLocation === '/about' } />
                    <NavLink 
                        icon="settings-outline"
                        link="/skills" 
                        selected={ currentLocation === '/skills' } />
                    <NavLink 
                        icon="document-outline"
                        link="/projects" 
                        selected={ currentLocation === '/projects'} />
                    <NavLink 
                        icon="mail-outline" 
                        link="/contact" 
                        selected={ currentLocation === '/contact' } />
                </ul>
            </div>
        </div>
    );
};

export default Navbar