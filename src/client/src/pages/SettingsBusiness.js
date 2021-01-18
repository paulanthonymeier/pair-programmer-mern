import React from 'react';
import './assets/scss/pages.scss';
import { Link } from 'react-router-dom';

const SettingsBusiness = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className="page-container">
      <div className="page-wrapper content">
        <div className="page-col col-left">
          <div className="page-content-actions-wrapper">
            <Link onClick={scrollPage} className="content-nav-link" to='/settings/business/create'>add location</Link>
          </div>
        </div>
        <div className="page-col col-right">
        <div className="page-content-wrapper">

        </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsBusiness;