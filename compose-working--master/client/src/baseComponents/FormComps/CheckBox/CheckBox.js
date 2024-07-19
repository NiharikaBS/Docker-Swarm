import React from 'react';
import cx from 'classnames';
import { Div, Label } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import styles from './CheckBox.module.scss';

const CheckBox = ({
  labelText,
  isRequired,
  direction = 'horizontal',
  hAlign = 'start',
  vAlign = 'center',
  distributedBetween = true,
  checked = false,
  className,
  onBoxClick,
  hasMarginBottom = true,
  ...props
}) => {
  return (
    <>
      <Div
        {...props}
        type="flex"
        direction={direction}
        hAlign={hAlign}
        vAlign={vAlign}
        distributedBetween={distributedBetween}
        className={cx('pos-rel', hasMarginBottom && 'm-b-16', className)}>
        {labelText && (
          <Div
            className={cx(
              'text-gray f-s-small',
              direction === 'horizontal' && 'm-r-8',
              direction === 'vertical' && 'm-b-8'
            )}>
            <Label className={cx(isRequired && 'required', '')}>{labelText}</Label>
          </Div>
        )}
        <Div
          type="flex"
          hAlign="center"
          vAlign="start"
          className={cx(
            'mouse-hand m-r-8 br-all-solid-2 br-gray width-px-20 height-px-20 box-shadow-type-one br-rad-px-5'
          )}
          onClick={onBoxClick}>
          {checked && <Icon type="dashboard" color={COLORS['theme-one']} />}
        </Div>
      </Div>
    </>
  );
};

export default CheckBox;
