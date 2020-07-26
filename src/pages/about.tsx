import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const AboutMe = ({ data, location }: PageProps<any>) => {
    const siteTitle = data.site.siteMetadata.title;
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About Me" />
            <h1>About Me</h1>
        </Layout>
    );
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;