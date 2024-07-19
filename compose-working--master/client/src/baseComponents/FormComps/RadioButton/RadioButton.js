import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import styles from './RadioButton.module.scss';

const RadioButton = ({
  labelText,
  selected = false,
  hasMarginBottom = true,
  onRadioButtonClick,
  className
}) => {
  return (
    <>
      <Div
        type="flex"
        hAlign="start"
        vAlign="center"
        className={cx(hasMarginBottom && 'm-b-32', className)}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx(
            'width-px-20 height-px-20 br-rad-per-50 box-shadow-type-one bg-white mouse-hand',
            labelText && 'm-r-8'
          )}
          onClick={onRadioButtonClick}>
          {selected && <Div className="width-px-10 height-px-10 br-rad-per-50 bg-theme-two"></Div>}
        </Div>
        <Div>
          <Label className="f-s-px-14 text-gray-dark">{labelText}</Label>
        </Div>
      </Div>
    </>
  );
};

export default RadioButton;
