import React from 'react';
import { Link } from 'react-router-dom'; 

const NavLink = ({link, text, icon, selected}) => {
    return(
        <li className="navlink">
            <Link to={link}>
                <div className={`navlink-wrapper ${selected ? 'active' : ''}`}>
                    <ion-icon name={icon}></ion-icon>
                    <p>{ text }</p>
                </div>
            </Link>
        </li>
    );
};

export default NavLink