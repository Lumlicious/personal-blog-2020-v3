import React from 'react';
import { Link, graphql } from 'gatsby';
import Tags from '../components/tags/tags';
import Bio from '../components/bio/bio';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import './blog-post.scss';

interface Props {
  data: any;
  pageContext: any;
  location: any;
  description: any;
  tags: string[];
}

const BlogPostTemplate = ({ data, pageContext, location }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="blog__article">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <div className="blog__meta">
            <time>{post.frontmatter.date}</time>
            <Tags tagList={post.frontmatter.tags} />
          </div>
          <p className="blog__description">{post.frontmatter.description}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <nav className="blog__post-nav">
          <div>
            <h2>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </h2>
          </div>
          <div>
            <h2>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </h2>
          </div>
        </nav>
        <hr />
        <footer className="blog__footer">
          <Bio />
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
