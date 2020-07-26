import React from 'react';
import { Link } from 'gatsby';
import './post.scss';
import _ from 'lodash';
import Tags from '../tags/tags';

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
        <h1 className="post__title">
          <Link to={slug}>{title}</Link>
        </h1>
        <div className="post__meta">
          <div className="post__date">{date}</div>
          <Tags tagList={tags} />
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
