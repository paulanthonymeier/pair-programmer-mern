import React, { useContext, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import './assets/scss/header.scss';
import Logo from './assets/media/logo-light.svg';

import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';

const HeaderAuthenticated = ({ match, location }) => {

  const history = useHistory();
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { logout, user } = authContext;
  const { profile, clearProfile } = profileContext;

  const onLogout = () => {
    // clear all context
    clearProfile();
    logout();
    // all state will be deleted when redirected to login page
    history.push(`/`);
  }

  const students = () => {
    if (user && user.isTeacher) {
      return (
        <Link onClick={scrollPage} className="nav-link" to='/students'>students</Link>
      )
    }
  }

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo-container">
            <div className="logo-wrapper">
              <Link onClick={scrollPage} className="logo-link" to='/'>
                <img src={Logo} className="logo-img" alt="Pair Programmer" />
                <h1>pair programmer</h1>
              </Link>
            </div>
          </div>
          <nav className="header-nav-container">
            <div className="header-nav-wrapper">
              <Link onClick={scrollPage} className="nav-link" to='/dashboard'>dashboard</Link>
              <Link onClick={scrollPage} className="nav-link" to='/profile'>profile</Link>
              <Link onClick={scrollPage} className="nav-link" to='/workspaces'>workspaces</Link>
              {students()}
              <Link onClick={scrollPage} className="nav-link" to='/settings/business'>settings</Link>
              <div onClick={onLogout} style={{cursor: 'pointer'}} href='' className="nav-link">logout</div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default withRouter(HeaderAuthenticated);