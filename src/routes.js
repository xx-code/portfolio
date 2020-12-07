import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ToggleLanguage from './components/toggleLanguage';
import Navbar from './layout/navbar';
import Home from './views/home';

const Router = () => {
    return(
        <>
            <Navbar />
            <div id="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ToggleLanguage />
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </>
    )
}

export default Router;