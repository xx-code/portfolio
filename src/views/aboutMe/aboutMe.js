import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

const AboutMe = () => {
    const { t } = useTranslation();

    return(
        <div id="about-me" className="container">
            <div className="row">
                <h1>{t('about_me')}</h1>
            </div>
        </div>
    );
};

export default AboutMe;