import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Navbar.css';
import { Col } from 'react-bootstrap'
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

export const MyNavbar = (props) => (
  
<Col xs={12} className={'pad0'}>
  <Navbar fluid collapseOnSelect inverse className={'pad5 margin5'}>

    <Navbar.Header>
        <Navbar.Brand>
            <IndexLink to='/' activeClassName='route--active' className="route-text">
              Home
            </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
        <Nav>

          <NavItem>
            <IndexLink to='/projects' activeClassName='route--active' className="route-text">
              Local Business Directory
            </IndexLink>
          </NavItem>

          <Navbar.Text> 
            <Navbar.Link href="https://issuu.com/milpitasinfo/docs/city_guide_mcg16_web?e=1213412/39221357" target="_blank" className="route-text">
              City Guide
            </Navbar.Link>
          </Navbar.Text>

          <NavItem>
            <IndexLink to='/news' activeClassName='route--active' className="route-text">
              News
            </IndexLink>
          </NavItem>

          <NavItem>
            <IndexLink to='/about' activeClassName='route--active' className="route-text">
              About
            </IndexLink>
          </NavItem>

        </Nav>

        <Nav pullRight>

          <NavItem>
            <IndexLink to='/admin' activeClassName='route--active' className="route-text">
              Log In
            </IndexLink>
          </NavItem>

        </Nav>
        
    </Navbar.Collapse>

  </Navbar>
</Col>    

);


export default MyNavbar
