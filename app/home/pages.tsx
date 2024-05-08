'use client';

import React, { useEffect, useRef, useState } from 'react';
import Welcome from './components/welcome';
import Button from '../components/button';
import Loading from '../components/loading';
import Image from 'next/image';
import './index.scss';

import logo from '../images/logo.png';

export function Home() {
    // const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setOpacity(1);
        }, 3500);
    }, [isLoading]);

    return(
        isLoading ?
                    <Loading  />
                  :
                    <div style={{opacity: opacity}} id="home" className="container">
                        <div className="flex">
                            <div className="content-left">
                                <Welcome />
                                <div className="btn-wrapper">
                                    <Button className="contact-btn" label={'contact_me'} />
                                </div>    
                            </div>
                            <div className="content-right">
                                <div className="logo-wrapper">
                                    <Image src={logo}  alt="logo" />
                                </div>
                            </div>
                        </div>  
                    </div>
    );
};