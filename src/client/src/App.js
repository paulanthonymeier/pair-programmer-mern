import React from 'react';
import Router from './Router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import ProfileState from './context/profile/profileState';

const App = () => {
  return (
    <AlertState>
      <AuthState>
        <ProfileState>
          <div className="App">
            <Navbar />
            <Router />
            <Footer />
          </div>
        </ProfileState>
      </AuthState>
    </AlertState>
  );
}

export default App;