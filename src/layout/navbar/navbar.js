import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavLink from './components/navLink';

import logo from '../../images/logo.png';

const Navbar = () => {

    const currentLocation = useLocation().pathname;
    const { t } = useTranslation()

    return(
        <div id="navbar">
            <div className="logo">
                <div className="wrapper-logo">
                    <img src={logo} alt="logo-short" />
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
        </div>
    );
};

export default Navbar