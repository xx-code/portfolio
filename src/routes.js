import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './layout/navbar';
import Home from './views/home';

const Router = () => {
    return(
        <>
            <Navbar />
            <div id="page-content">
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default Router