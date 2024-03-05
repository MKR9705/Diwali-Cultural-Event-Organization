import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = () => {
  return (
    <div>
      <Navbar color="white" light expand="md" className="fixed-top" style={{ padding: '20px' }}>
        <Nav className="ml-auto" navbar>
          <NavItem className="mr-3">
            <Link to="/Home" className="white-link">Home</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/DiwaliStories" className="white-link">Diwali Stories</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/PhotoGallery" className="white-link">Features Of Diwali</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/GetData" className="white-link">View Participants</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/Register" className="white-link">Ready To Participate</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/Update" className="white-link">Modify Participant Data</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/Delete" className="white-link">Withdraw Participation</Link>
          </NavItem>
          
          <NavItem className="mr-3">
            <Link to="/about" className="white-link">About Us</Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link to="/contact" className="white-link">Contact Us</Link>
          </NavItem>
          
          
          
        </Nav>
      </Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
