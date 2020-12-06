import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './components/navLink';

import logo from '../../images/logo.png';

const Navbar = () => {

    const currentLocation = useLocation().pathname;


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
                        text="Home" 
                        icon="home-outline"
                        link="/"
                        selected={ currentLocation === '/'} />
                    <NavLink 
                        text="About Me"
                        icon="person-outline"
                        link="/about" 
                        selected={ currentLocation === '/about'} />
                    <NavLink 
                        text="Skills"
                        icon="settings-outline"
                        link="/skills" 
                        selected={ currentLocation === '/skills'} />
                    <NavLink 
                        text="Project" 
                        icon="document-outline"
                        link="/projects" 
                        selected={ currentLocation === '/projects'} />
                    <NavLink 
                        text="Contact"
                        icon="mail-outline" 
                        link="/contact" 
                        selected={ currentLocation === '/contact'} />
                </ul>
            </div>
        </div>
    );
};

export default Navbar