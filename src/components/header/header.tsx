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
        <div className="header__author-name header__author-name--first">
          Chad
        </div>
        <div className="header__author-name header__author-name--last">
          Lumley
        </div>
        <div className="header__author-title">Sr. Front-End Engineer</div>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="header__active-nav">
                Home
              </Link>
            </li>
            <Link to="/about" activeClassName="header__active-nav">
              About Me
            </Link>
          </ul>
          <div className="header__social-links"></div>
        </nav>
      </div>
    </header>
  );
};

export default header;
