import React from 'react';
import isEmpty from '../../utils/isEmpty';

import './index.scss';
import Link from 'next/link';

interface Props {
    className?: string,
    href?: string,
    onClick?: (event: React.MouseEvent) => void,
    label: string  
};

export default function Button({ className, onClick, label, href = ''}: Props) {
    return(
        <>
            { 
                isEmpty(href) ? <button className={`${className} button`} onClick={onClick} >{ label }</button> 
                              :
                                <Link className="button" href={href}>{ label }</Link>
            }
        </>
    );
};