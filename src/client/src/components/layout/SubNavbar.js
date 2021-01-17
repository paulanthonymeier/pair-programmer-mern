import React, { Fragment, useContext } from 'react';
import SubHeaderAuthenticated from '../SubHeaderAuthenticated';
import AuthContext from '../../context/auth/authContext';

const SubNavbar = () => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Fragment>
      { isAuthenticated ? ( <SubHeaderAuthenticated /> ) : ( null ) };
    </Fragment>
  )
}

export default SubNavbar;