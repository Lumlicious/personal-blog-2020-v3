import React from 'react';
import { Link } from 'gatsby';
import './post.scss';
import _ from 'lodash';

interface Props {
  date: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

const post = ({ date, slug, title, description, tags }: Props) => {
  return (
    <article>
      <div className="post">
        <h2 className="post__title">
          <Link to={slug}>{title}</Link>
        </h2>
        <div className="post__meta">
          <div>{date}</div>
          <div className="post__tags">
            {tags
              ? tags.map((value, index) => {
                  return (
                    <a className="post__tag" key={index} href={'/tags/' + _.kebabCase(value) + '/'}>
                      <small>#{value}</small>
                    </a>
                  );
                })
              : null}
          </div>
        </div>

        <div className="post__description">
          <p
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default post;
