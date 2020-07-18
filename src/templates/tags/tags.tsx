import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';
import Post from '../../components/post/post';

interface Props {
  data: any;
  pageContext: any;
  location: any;
  description: any;
  tags: string[];
}

// Components
import { Link, graphql } from 'gatsby';
const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} description={tag} />
      <div>
  <h1>{`#${tag}`}</h1>
        {/* <h3>{tagHeader}</h3> */}
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <Post
                date={node.frontmatter.date}
                slug={node.fields.slug}
                title={title}
                description={node.frontmatter.description || node.excerpt}
                tags={node.frontmatter.tags}
              />
            );
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        {/* <Link to="/tags">All tags</Link> */}
      </div>
    </Layout>
  );
};
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};
export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
