import React, { useEffect } from 'react';
import Welcome from './components/welcome';
import Button from '../../components/button';
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.png';

const Home: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const homeComponent = document.getElementById('home');
        if (homeComponent) {
            homeComponent.style.opacity = '1';
        }
    });

    return(
        <div id="home" className="container">
            <div className="row">
                <div className="content-left">
                    <Welcome />
                    <div className="btn-wrapper">
                        <Button className="contact-btn" label={t('contact_me')} />
                    </div>    
                </div>
                <div className="content-right">
                    <div className="logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Home;