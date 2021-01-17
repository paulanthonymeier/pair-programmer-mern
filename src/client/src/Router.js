import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PageNotFound from './pages/PageNotFound';

import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Workspaces from './pages/Workspaces';
import Students from './pages/Students';
import SettingsRouter from './components/routing/SettingsRouter';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute exact path = '/dashboard' component={Dashboard} />
      <PrivateRoute exact path = '/profile' component={Profile} />
      <PrivateRoute exact path = '/workspaces' component={Workspaces} />
      <PrivateRoute exact path = '/students' component={Students} />
      <PrivateRoute path = '/settings' component={SettingsRouter} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}

export default Router;