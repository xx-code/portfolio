import React, { useEffect, useState } from 'react';
import Welcome from './components/welcome';
import Button from '../../components/button';
import Loading from '../../components/loading';
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.png';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const homeComponent = document.getElementById('home');
        if (homeComponent) {
            homeComponent.style.opacity = '1';
        }
    });

    return(
        isLoading ?
                    <Loading className="" />

                  :

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