import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/isEmpty';

import './index.scss';

interface Props {
    className?: string,
    href?: string,
    onClick?: (event: React.MouseEvent) => void,
    label: string  
};

const Button: React.FC<Props> = ({ className, onClick, label, href = ''}) => {
    return(
        <>
            { 
                isEmpty(href) ? <button className={`${className} button`} onClick={onClick} >{ label }</button> 
                              :
                                <Link className="button" to={href}>{ label }</Link>
            }
        </>
    );
};

export default Button;