import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.center}>
        <img src={logo} alt="logo" className={classes.logo} />
        <ul className={classes.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
