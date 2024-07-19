import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('width-px-40 height-px-40 bg-theme-one br-rad-per-50 mouse-hand')}
        onClick={() => window.scrollTo(0, 0)}>
        <Icon type="angles-up" color="white" />
      </Div>
    </>
  );
};

export default ScrollToTop;
