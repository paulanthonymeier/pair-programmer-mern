import React from 'react';
import { Link } from 'react-router-dom';
import './assets/scss/footer.scss';
import Logo from './assets/media/logo-light.svg';

const FooterMain = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  const currentYear = () => {
    return (new Date().getFullYear());
  }
  

  return (
    <section className="footer-container">
      <div className="footer-wrapper">
        <div className="logo-container">
          <div className="logo-wrapper">
            <Link onClick={scrollPage} className="logo-link" to='/'>
              <img src={Logo} className="logo-img" alt="Pair Programmer" />
              <p>pair programmer</p>
            </Link>
            <div className="footer-date">
            <p>{currentYear()} © copyright</p>
            </div>
          </div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav-wrapper">
            {/* <Link onClick={scrollPage} className="nav-link" to='/'>home</Link> */}
            {/* <Link onClick={scrollPage} className="nav-link" to='/login'>login</Link> */}
            {/* <Link onClick={scrollPage} className="nav-link" to='/signup'>signup</Link> */}
          </div>
        </div>
      </div>
    </section>
  )
};

export default FooterMain;