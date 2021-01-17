import React from 'react';
import { Link } from 'react-router-dom'
import './assets/scss/header.scss';
import Logo from './assets/media/logo-light.svg';

const HeaderUnauthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

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
              <Link onClick={scrollPage} className="nav-link" to='/'>home</Link>
              <Link onClick={scrollPage} className="nav-link" to='/login'>login</Link>
              <Link onClick={scrollPage} className="nav-link signup-btn" to='/signup'>signup</Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default HeaderUnauthenticated;