import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import CheckBox from '@/baseComponents/FormComps/CheckBox';

import styles from './SingleCheckBox.module.scss';

const SingleCheckBox = ({
  selected,
  setSelected,
  labelText,
  isRequired,
  className,
  errorMessage,
  errorHandler,
  hasMarginBottom = true
}) => {
  useEffect(() => {
    if (selected && errorHandler) {
      errorHandler('');
    }
  }, [selected]);

  return (
    <>
      <Div className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}>
        <Div className={cx(styles.checkBoxContainer)}>
          <CheckBox
            checked={selected}
            className={'flex--dir--row--reverse'}
            labelText={labelText}
            distributedBetween={false}
            onBoxClick={() => setSelected(!selected)}
            hAlign="end"
            isRequired={isRequired}
          />
        </Div>
        {errorMessage && (
          <Div
            className={cx(
              'global-error-message',
              errorMessage && 'global-error-message-is-active'
            )}>
            {errorMessage}
          </Div>
        )}
      </Div>
    </>
  );
};

export default SingleCheckBox;
