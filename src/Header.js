import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <div className="title">
      <h1 className="name">Eye in the Sky Photos And Video</h1>
      <h2 className="name">Aerial photography and video in Denver </h2>
    </div>


    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
      <li><NavLink to="/news">News</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>
      <li><NavLink to="/inspections">Inspections</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
    </ul>
  </header>
);

export default Header;
