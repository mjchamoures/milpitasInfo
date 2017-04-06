import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Navbar.scss';
import { Col } from 'react-bootstrap'


export const Navbar = (props) => (
  <Col xs={10} xsOffset={1}>
  <div className="main-nav-bar">
    <IndexLink to='/' activeClassName='route--active' className="route-text">
      Home
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      Local Business Directory
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      City Guide
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      Calendar
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      News
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      Local Businesses
    </IndexLink>
    
    <IndexLink to='/projects' activeClassName='route--active' className="route-text">
      Coupons
    </IndexLink>
    
    <IndexLink to='/about' activeClassName='route--active' className="route-text">
      About
    </IndexLink>
  </div>
  </Col>

);


export default Navbar