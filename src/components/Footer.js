import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4 bg-light" style={{ borderTop: '1px solid #dee2e6' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <hr className="my-4" style={{ borderColor: '#007bff' }} />
        <div className="row justify-content-center">
          <NavLink to="/" activeClassName="active" exact className="nav-link" style={{ color: '#007bff', textDecoration: 'none' }}>
            Home
          </NavLink>
          <span className="mx-2" style={{ color: '#6c757d' }}>|</span>
          <NavLink to="/movies" activeClassName="active" className="nav-link" style={{ color: '#007bff', textDecoration: 'none' }}>
            Movies
          </NavLink>
          <span className="mx-2" style={{ color: '#6c757d' }}>|</span>
          <NavLink to="/profile" activeClassName="active" className="nav-link" style={{ color: '#007bff', textDecoration: 'none' }}>
            Profile
          </NavLink>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-6">
            <p style={{ color: '#6c757d' }}>Created by Kate Murzaeva</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
