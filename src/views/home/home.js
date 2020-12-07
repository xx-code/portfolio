import React from 'react';
import ToggleLanguage from '../../components/toggleLanguage';
import Welcome from './components/welcome';
import Button from '../../components/button';
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.png';

const Home = () => {
    const { t } = useTranslation();

    return(
        <div id="home" className="container">
            <div className="row">
                <div className="col">
                    <ToggleLanguage />
                </div>
            </div>
            <div className="content row">
                <div className="col-md-8">
                    <Welcome />
                    <div className="btn-wrapper">
                        <Button className="contact-btn" label={t('contact_me')} />
                    </div>    
                </div>
                <div className="col-md-4">
                    <div className="logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;