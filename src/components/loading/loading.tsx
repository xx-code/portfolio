import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';

import './index.scss';

interface Props {
    className: string
}

const Loading: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    return(
        <div id="loading" className={className} >
            <div className="loading-wrapper">
                <div className="logo">
                    <div className="logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="loading-info">
                    <p>
                        {t('loading')}
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

export default Loading;