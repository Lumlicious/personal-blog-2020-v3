import React from 'react';
import { Link } from 'gatsby';
import Header from '../header/header';

import './layout.scss';

interface Props {
  location: any;
  title: string;
  children: any;
}

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    );
  }
  return (
    <>
      <section className="site grid">
        <Header></Header>
        <div className="site__content">
          <main className="site__main">{children}</main>
          <footer className="site__footer">
            <small>
              © {new Date().getFullYear()} Chad Lumley, Built with // {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </small>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Layout;
