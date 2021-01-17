import React from 'react';
import { Switch } from 'react-router-dom';

import SubHeaderAuthenticated from '../SubHeaderAuthenticated';
import PrivateRoute from './PrivateRoute';
import SettingsBusiness from '../../pages/SettingsBusiness';
import SettingsPeople from '../../pages/SettingsPeople';

const SettingsRouter = ({ match, location }) => {
  return (
    <SettingsTemplate>
      <Switch>
        <PrivateRoute path = {match.path + '/business'} >
          <SettingsBusiness />
        </PrivateRoute>
        <PrivateRoute path = {match.path + '/people'} >
          <SettingsPeople />
        </PrivateRoute>
      </Switch>
    </SettingsTemplate>
  );
}

const SettingsTemplate = (props) => {
  return (
    <>
      <SubHeaderAuthenticated />
      {props.children}
    </>
  );
}

export default SettingsRouter;