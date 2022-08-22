import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';

import '../loading/index.scss';

const SortLoading: React.FC = ({}) => {
    const { t } = useTranslation();

    return(
        <div style={{width: '100%', height: '100%'}} >
            <div className="loading-wrapper">
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
    )
}

export default SortLoading;