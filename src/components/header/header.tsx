import React from 'react';
import { Link } from 'gatsby';
import profilePic from '../../assets/images/NewPixelMe.png';
import './header.scss';

const header = () => {
  return (
    <header className="header">
      <div className="header__branding">
        <Link to="/">
          <div className="showbox">
            <div className="loader">
              <img
                src={profilePic}
                // alt={author.name}
                className="author-photo"
              />
              <div className="cloud"></div>
              <div className="cloud"></div>
              <div className="cloud"></div>
              <div className="cloud"></div>
              <div className="cloud"></div>
            </div>
          </div>
        </Link>
        <div className="header__author-container">
          <div className="header__author-name header__author-name--first">
            Chad
          </div>
          <div className="header__author-name header__author-name--last">
            Lumley
          </div>
          <div className="header__author-title">Sr. Front-End Engineer</div>
        </div>
      </div>
      <nav role="navigation" className="navigation">
        <div className="navigation__mobile-menu">
          <input type="checkbox" className="navigation__checkbox" />
          <div className="navigation__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="navigation__menu">
            <li>
              <Link to="/" activeClassName="navigation__active-nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="navigation__active-nav">
                About Me
              </Link>
            </li>
          </ul>
          {/* <div className="header__social-links"></div> */}
        </div>
        <div className="navigation__side-menu">
          <ul>
            <li>
              <Link to="/" activeClassName="navigation__active-nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="navigation__active-nav">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
