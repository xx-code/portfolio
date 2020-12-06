import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './layout/navbar';
import Home from './views/home';

const Router = () => {
    return(
        <>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    )
}

export default Router