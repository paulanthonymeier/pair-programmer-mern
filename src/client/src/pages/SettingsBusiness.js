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
          <div className="section-title">
            <h3>company / institute</h3>
          </div>
          <div className="section-details">
            <div className="row-title">
              business name
            </div>
            <div className="row-info">
              [business_name]
            </div>
          </div>
          <div className="section-details">
            <div className="row-title">
              business location
            </div>
            <div className="row-info">
              [business_location]
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsBusiness;