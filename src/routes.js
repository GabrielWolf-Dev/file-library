import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Error404 from './components/Error-404';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;