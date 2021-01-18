import React from 'react';
import './assets/scss/pages.scss';
import { Link } from 'react-router-dom';

const SettingsPeople = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className="page-container">
      <div className="page-wrapper content">
        <div className="page-col col-left">
          <div className="page-content-actions-wrapper">
            <Link onClick={scrollPage} className="content-nav-link" to='/settings/people/create'>add staff / educator</Link>
          </div>
        </div>
        <div className="page-col col-right">
        <div className="page-content-wrapper">
          <div className="section-title">
            <h3>staff / educators</h3>
          </div>
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </div>
        </div>
      </div>
    </section>
  )
}

const PeopleCard = () => {
  return (
    <div className="section-details-wrapper">
      <div className="section-details">
        <div className="row-title">
          full name
        </div>
        <div className="row-info">
          [first_name] [last_name]
        </div>
      </div>
      <div className="section-details">
        <div className="row-title">
          email address
        </div>
        <div className="row-info">
          [email_address]
        </div>
      </div>
    </div>
  )
}

export default SettingsPeople;