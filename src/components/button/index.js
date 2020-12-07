import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/isEmpty';

import './index.scss';

const Button = ({ className, href, onClick, label }) => {
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