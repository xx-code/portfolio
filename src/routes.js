import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ToggleLanguage from './components/toggleLanguage';
import Navbar from './layout/navbar';
import Home from './views/home';
import AboutMe from './views/aboutMe';
import Skills from './views/skills';
import Contact from './views/contact';
import Projects from './views/projects';

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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <AboutMe />
                    </Route>
                    <Route exact path="/skills">
                        <Skills />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Routes;