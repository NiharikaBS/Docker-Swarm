import React from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import Type1 from './subs/Type1';
import styles from '../../DevDesign.module.scss';

function DisplayList() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <Type1 />
      </Div>
    </>
  );
}

export default DisplayList;
