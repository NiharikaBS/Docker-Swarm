import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';
import CheckBox from '@/baseComponents/FormComps/CheckBox';

import styles from './FormCheckBox.module.scss';

const FormCheckBox = ({
  options,
  selectedOptions,
  setSelectedOptions,
  labelText,
  isRequired,
  className,
  errorMessage,
  errorHandler,
  hasMarginBottom = true
}) => {
  const boxClickHandler = (item) => {
    let curSelectedOptions = [...selectedOptions];
    const alreadyExist = curSelectedOptions.some((selectedItem) => selectedItem === item.value);
    if (alreadyExist) {
      curSelectedOptions = curSelectedOptions.filter((selectedItem) => selectedItem !== item.value);
    } else {
      curSelectedOptions.push(item.value);
    }
    setSelectedOptions(curSelectedOptions);
  };

  useEffect(() => {
    if (selectedOptions) {
      errorHandler('');
    }
  }, [selectedOptions]);

  return (
    <>
      <Div className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}
        <Div type="flex" vAlign="center" className={cx('width-per-100 flex--wrap')}>
          {options.map((item, idx) => (
            <CheckBox
              checked={selectedOptions.some((curOption) => curOption === item.value)}
              className={'m-r-80'}
              labelText={item.shownText}
              key={idx}
              onBoxClick={() => boxClickHandler(item)}
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
  );
};

export default FormCheckBox;
