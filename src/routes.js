import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ToggleLanguage from './components/toggleLanguage';
import Navbar from './layout/navbar';
import Home from './views/home';
import AboutMe from './views/aboutMe';

const Routes = () => {
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
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/about" >
                        <AboutMe />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Routes;