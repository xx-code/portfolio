import React from 'react';
import { Link } from 'react-router-dom'; 

declare global {
    namespace JSX  {
        interface IntrinsicElements {
        [elemName: string]: any;
        }
    }  
}

interface Props {
    link: string,
    text?: string,
    icon: string,
    selected: boolean
};

const NavLink: React.FC<Props> = ({link, text, icon, selected}) => {
    return(
        <li className="navlink">
            <Link to={link}>
                <div className={`navlink-wrapper ${selected ? 'active' : ''}`}>
                    <ion-icon name={icon} />
                    <p>{ text }</p>
                </div>
            </Link>
        </li>
    );
};

export default NavLink