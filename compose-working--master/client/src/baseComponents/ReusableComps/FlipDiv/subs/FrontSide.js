import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../FlipDiv.module.scss';

const FrontSide = ({ children, className, ...props }) => {
  return (
    <Div className={cx('height-per-100', className)} {...props}>
      {children}
    </Div>
  );
};

export default FrontSide;
