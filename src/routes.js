import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { IsAuthProv } from './context/isAuth';
import { useAuth } from './hooks/useAuth';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Error404 from './components/Error-404';
import Credits from './components/Credits';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [auth] = useAuth();
    
    return(
        <Route
            {...rest}
            render={props => (
                auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/register', state: { from: props.location } }} />
                )
            )}
        />
    );
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/credits" component={Credits} />
            <IsAuthProv>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </IsAuthProv>
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;