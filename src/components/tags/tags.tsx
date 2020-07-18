import * as React from 'react';
import './tags.scss';
import _ from 'lodash';

interface Props {
  tagList: string[];
}

const tags = ({ tagList }: Props) => {
  return (
    <div className="tags">
      {tagList
        ? tagList.map((value: string, index: number) => {
            return (
              <a className="tag" key={index} href={'/tags/' + _.kebabCase(value) + '/'}>
                <small>#{value}</small>
              </a>
            );
          })
        : null}
    </div>
  );
};

export default tags;
