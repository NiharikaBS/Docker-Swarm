import React from 'react';
import cx from 'classnames';
import { Div, Label as BaseLabel } from 'basedesign-iswad';

import styles from './Label.module.scss';

const Label = ({ labelText, isRequired, className }) => {
  return (
    <>
      <Div className={cx('text-gray-dark f-s-small m-b-4', className)}>
        <BaseLabel className={cx(isRequired && 'required')}>{labelText}</BaseLabel>
      </Div>
    </>
  );
};

export default Label;
