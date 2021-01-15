import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PageNotFound from './pages/PageNotFound';

import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Workspaces from './pages/Workspaces';
import Students from './pages/Students';
import Settings from './pages/Settings';

const Router = () => {
  return (
      <Switch>
        
        {/* PUBLIC ROUTES */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        
        {/* PROTECTED ROUTES */}
        <PrivateRoute exact path = '/dashboard' component={Dashboard} />
        <PrivateRoute exact path = '/workspaces' component={Workspaces} />
        <PrivateRoute exact path = '/students' component={Students} />
        <PrivateRoute exact path = '/settings' component={Settings} />

        {/* 404 Page */}
        <Route path='*' component={PageNotFound} />

      </Switch>
  );
}

export default Router;