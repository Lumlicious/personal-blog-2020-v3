import * as React from 'react';
import './tags.scss';

interface Props {
  tagList: string[];
}

const tags = ({ tagList }: Props) => {
  return (
    <div className="tags">
      {tagList
        ? tagList.map((value: string, index: number) => {
            return (
              <a className="tag" key={index} href="#">
                #{value}
              </a>
            );
          })
        : null}
    </div>
  );
};

export default tags;
