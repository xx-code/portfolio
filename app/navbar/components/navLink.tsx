import Link from 'next/link';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)

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

export default function NavLink({link, text, icon, selected}: Props) {
    return(
        <li className="navlink">
            <Link href={link}>
                <div className={`navlink-wrapper ${selected ? 'active' : ''}`}>
                    <FontAwesomeIcon className='icon' icon={icon} />
                    <p>{ text }</p>
                </div>
            </Link>
        </li>
    );
};