import React from 'react';
import logo from '../../images/logo.png';
import Image from 'next/image';

import './index.scss';

interface Props {
    className?: string
}

export default function Loading({ className }: Props) {
    // const { t } = useTranslation();

    return(
        <div id="loading" className={className} >
            <div className="loading-wrapper">
                <div className="logo">
                    <div className="logo-wrapper">
                        <Image src={logo} height={80} alt="logo" />
                    </div>
                </div>
                <div className="loading-info">
                    <p>
                        {'loading'}
                        <span className="dot-1">.</span>
                        <span className="dot-2">.</span>
                        <span className="dot-3">.</span>
                    </p>
                </div>
                <div className="load-bar">
                    <div className="load-bar-wrapper">
                        <div className="bar" />
                    </div>
                </div>
            </div>
        </div>
    );
};