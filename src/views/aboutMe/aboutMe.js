import React, { useEffect } from 'react'; 
import { useTranslation } from 'react-i18next';

import './index.scss';

const AboutMe = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.getElementById('about-me').style.opacity = 1;
    });
    
    return(
        <div id="about-me" className="container">
            <div className="row">
                <div className="content-left col-md-8">
                    <h1>{t('about_me')}</h1>
                    <div className="paragraph col-12">
                        <p>{t('para_1')}</p>
                        <p>{t('para_2')}</p>
                        <p>{t('para_3')}</p>
                    </div>
                </div>
                <div className="content-right col-md-4">
                    <div className="bubble">
                        <div className="bubble-wrapper">
                            <div className="bubble-A">
                                <h1>A</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;