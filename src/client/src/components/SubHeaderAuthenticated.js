import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './assets/scss/header.scss';

import AuthContext from '../context/auth/authContext';

const SubHeaderAuthenticated = (props) => {
  
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const showMenu = () => {
    if (user && user.isTeacher) {
      return  // note! might use this function - leave it for now
    }
  }

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="subheader-container">
      <div className="subheader-wrapper">
        <nav className="subheader-nav-container">
          <div className="subheader-nav-wrapper">
            <Link onClick={scrollPage} className="subnav-link" to='/settings/business'>campany / institute</Link>
            <Link onClick={scrollPage} className="subnav-link" to='/settings/people'>staff / educators</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(SubHeaderAuthenticated);