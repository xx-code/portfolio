import React from 'react';
import ToggleLanguage from '../../components/toggleLanguage';

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <ToggleLanguage />
                </div>
            </div>
        </div>
    );
};

export default Home