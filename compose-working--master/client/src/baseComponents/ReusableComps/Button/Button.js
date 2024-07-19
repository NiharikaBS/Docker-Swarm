import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from './Button.module.scss';

const Button = ({
  btnType = 1,
  iconType,
  iconColor,
  iconScale,
  isDisabled,
  hasBorderRadius = true,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <BaseButton
        className={cx(
          hasBorderRadius && 'br-rad-px-8',
          isDisabled && '',
          btnType === 1 && !isDisabled
            ? 'bg-theme-one p-y-8 p-x-32 bg-theme-two-on-hover width-per-100 br-none box-shadow-type-one text-black'
            : '',
          btnType === 2 && !isDisabled
            ? 'bg-white p-y-8 p-x-32 br-theme-one br-theme-two-on-hover br-all-solid-2 width-per-100 text-black'
            : '',
          btnType === 3 && !isDisabled
            ? 'bg-white p-y-8 p-x-32 bg-theme-one-on-hover width-per-100 br-none text-black box-shadow-type-one'
            : '',
          className
        )}
        {...props}
        disabled={isDisabled}>
        <Div type="flex" hAlign="center">
          {iconType && (
            <Div type="flex" hAlign="center" vAlign="center" className="mr1">
              <Icon type={iconType} color={iconColor} scale={iconScale} />
            </Div>
          )}
          <Div>{children}</Div>
        </Div>
      </BaseButton>
    </>
  );
};

export default Button;
