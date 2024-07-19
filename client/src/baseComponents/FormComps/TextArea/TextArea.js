import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div, TextArea as BaseTextArea } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';

import styles from './TextArea.module.scss';

const TextArea = ({
  labelText,
  val,
  setVal,
  errorHandler,
  isRequired,
  errorMessage,
  onChange,
  className,
  hasMarginBottom = true,
  ...props
}) => {
  return (
    <>
      <Div className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}

        <Div className={cx('')}>
          <BaseTextArea
            className={cx(
              'width-per-100 min-width-per-100 max-width-per-100 min-height-px-40 max-height-px-150 height-px-100 bg-white box-shadow-type-one global-outline-none br-none p-all-8'
            )}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              errorHandler('');
              if (onChange) {
                onChange(e);
              }
            }}
            {...props}
          />

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
      </Div>
    </>
  );
};

export default TextArea;
