import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './FlipDiv.module.scss';

const FlipDiv = ({
  isFlipped,
  setIsFlipped,
  containerClassName,
  frontClassName,
  backClassName,
  children
}) => {
  return (
    <>
      <Div
        className={cx(
          'width-per-100 mouse-hand',
          containerClassName,
          styles.flipCard,
          isFlipped ? styles.flipped : ''
        )}
        onClick={() => setIsFlipped(!isFlipped)}>
        <Div className={cx('pos-rel width-per-100 height-per-100', styles.flipCardInner)}>
          <Div
            className={cx(
              'pos-abs width-per-100 height-per-100 br-rad-px-10 box-shadow-type-one',
              frontClassName,
              styles.flipCardFront
            )}>
            {children?.[0]}
          </Div>
          <Div
            className={cx(
              'pos-abs width-per-100 height-per-100 br-rad-px-10 box-shadow-type-one',
              backClassName,
              styles.flipCardBack
            )}>
            {children?.[1]}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default FlipDiv;
