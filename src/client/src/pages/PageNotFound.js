import React from 'react';
import { Link } from 'react-router-dom'
import './assets/scss/pages.scss';
import errorImage from './assets/media/sad-macbook.gif';

const PageNotFound = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="page-container">
      <div className="page-wrapper error-page">
        <div className="pagenotfound">
          <div className="image">
            <img className="error-image" src={errorImage} alt=""/>
          </div>
          <div className="text">
            <span>
              Sorry, this page does not exist!<br />
              You may want to <Link onClick={scrollPage} className="link" to='/login'>login</Link> or <Link onClick={scrollPage} className="link" to='/signup'>signup</Link>.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound;