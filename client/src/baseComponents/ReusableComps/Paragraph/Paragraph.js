import React from 'react';
import cx from 'classnames';
import { Div, Paragraph as BaseParagraph } from 'basedesign-iswad';

import styles from './Paragraph.module.scss';

const Paragraph = ({
  type = 1,
  isJustified = false,
  isCentralized = false,
  className,
  children,
  ...props
}) => {
  return (
    <>
      {type === 1 && (
        <BaseParagraph
          className={cx(
            '',
            styles.paragraphOne,
            isJustified && styles.paragraphOneJustified,
            isCentralized && styles.paragraphOneCenteralized,
            className
          )}
          {...props}>
          {children}
        </BaseParagraph>
      )}
    </>
  );
};

export default Paragraph;
