import React from 'react';
import { Link } from 'gatsby';

import '../styles/main.scss';

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
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
