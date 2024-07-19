import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ListItem from './subs/ListItem';
import styles from './List.module.scss';

const List = ({ type = 1, list, ...props }) => {
  return (
    <>
      {list?.map((item, idx) => {
        if (type === 1) {
          return <ListItem key={idx} item={item} {...props} />;
        }
      })}
    </>
  );
};

export default List;
