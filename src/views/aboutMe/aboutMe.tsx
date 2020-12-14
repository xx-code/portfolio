import React, { useEffect } from 'react'; 
import { useTranslation } from 'react-i18next';
import TimeLine from './components/timeline';

import './index.scss';

const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const aboutMeComponent = document.getElementById('about-me');
        if (aboutMeComponent) {
           aboutMeComponent.style.opacity = '1'; 
        }
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
                    <TimeLine />
                </div>
                <div className="content-right col-md-4">
                    <div className="bubble">
                        <div className="bubble-wrapper">
                            <div className="bubble-A">
                                <h1>A</h1>
                            </div>
                            <div className="bubble-B"></div>
                            <div className="bubble-C"></div>
                            <div className="bubble-D"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;