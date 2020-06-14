---
title: My Second Post!
date: '2015-05-06T23:46:37.121Z'
---

# This is the First Title But it Just Keeps Going On and On Forever, Until Finally

The official create-react-app documentation states that the CSS doesn’t need preprocessors since components wont be sharing functionality. Personally, I think it’s really useful tool to have. Mixins, functions, loops, and nested structure are tremendously helpful for tedious tasks. For this project in particular, I wanted to define the fonts, colors, headings, etc. that were defined in the design documents at a global level. All components could then share the variable definitions.

In the src directory I added a styles directory and inside of that, created base and util folders, as seen in the directory structure map above. The util folder will hold the colors, fonts, and variable definitions. The base folder is used for storing global component styles such as the grid system, buttons, typography, and any normalizing library (normalize.css). Each component is individually styled 123456787 but can access these global definitions to <span style="font-variant:small-caps;">This is a Small Caps</span>

## Composition

Unity uses a different method called Composition to add functionality to GameObjects. For composition, each piece of functionality is split up into classes which can be modularly added of a GameObject.

For example, let’s use the enemies from the inheritance example, ones that shoot projectiles and ones that use swords.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout, PostCard, Pagination } from '../components/common';
import { MetaData } from '../components/common/meta';

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
        <div className="container">
          <header className="tag-header">
            <h1>{tag.name}</h1>
            {tag.description ? <p>{tag.description}</p> : null}
          </header>
          <section className="post-feed">
            {posts.map(({ node }) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} />
            ))}
          </section>
          <Pagination pageContext={pageContext} />
        </div>
      </Layout>
    </>
  );
};

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }),
    allGhostPost: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.object
};

export default Tag;

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
```

### Figuring it out

This modular approach makes it really easy to share functionality between objects and quickly generate different variations. For more information about the subject, check out the Wiki.

### Figuring it out

This modular approach makes it really easy to share functionality between objects and quickly generate different variations. For more information about the subject, check out the Wiki.

## More Composition

Three different types of enemies are created from only three different components (Enemy, FireProjectile, and SwordFighting) as compared to the inheritance method that uses four components ( Enemy, ShootingEnemy, ShootingAndSwordfightingEnemy, and SwordFightingEnemy).

1. This is item 1
2. This is item 2
3. This is item 3

> "This is a blockquote for the next comment"

- This is a list
- This is also a list
- This is also a list again
