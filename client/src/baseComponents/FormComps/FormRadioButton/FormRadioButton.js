import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RadioButton from '@/baseComponents/FormComps/RadioButton';
import Label from '@/baseComponents/FormComps/Label';

import styles from './FormRadioButton.module.scss';

const FormRadioButton = ({
  labelText,
  options,
  val,
  setVal,
  errorMessage,
  errorHandler,
  isRequired,
  className
}) => {
  return (
    <>
      <>
        <Div className={cx('pos-rel', className)}>
          {labelText && <Label labelText={labelText} isRequired={isRequired} />}
          <Div className={cx(styles.radioButtonContainer)}>
            {options.map((item, idx) => (
              <RadioButton
                selected={val === item.value}
                className={'mb1'}
                labelText={item.shownText}
                key={idx}
                onRadioButtonClick={() => {
                  setVal(item.value);
                  if (errorHandler) {
                    errorHandler('');
                  }
                }}
                hasDefaultClass={false}
              />
            ))}
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
    </>
  );
};

export default FormRadioButton;
