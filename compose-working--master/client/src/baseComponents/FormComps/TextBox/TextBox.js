import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Input as BaseInput } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';
import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from './TextBox.module.scss';

const TextBox = ({
  labelText,
  isRequired,
  onChange,
  val,
  setVal,
  errorHandler,
  className,
  type,
  hasIcon = false,
  iconType,
  iconColor = 'gray',
  hasMarginBottom = true,
  hasBorderRadius = true,
  inputFieldClassName = '',
  hasBoxShadow = true,
  ...props
}) => {
  const [curType, setCurType] = useState(type);

  return (
    <>
      <Div className={cx('width-per-100 pos-rel', hasMarginBottom && 'm-b-32', className)}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}
        <Div className={cx('width-per-100')}>
          <BaseInput
            containerClassName={cx('width-per-100 pos-rel')}
            className={cx(
              'width-per-100 p-y-16 p-x-8 br-none',
              hasBoxShadow && 'box-shadow-type-one',
              hasBorderRadius && 'br-rad-px-8',
              type === 'password' && 'p-x-24',
              styles.input,
              inputFieldClassName
            )}
            errorContainerClassName={cx('global-error-message')}
            activeErrorContainerClassName={cx('global-error-message-is-active')}
            type={curType}
            value={val}
            onChange={(e) => {
              if (setVal) {
                setVal(e.target.value);
              }
              errorHandler && errorHandler('');
              if (onChange) {
                onChange(e);
              }
            }}
            {...props}
          />

          {hasIcon && (
            <>
              <Div className={cx(styles.icon)}>
                <Icon type={iconType} color={iconColor} width={'14'} />
              </Div>
            </>
          )}

          {type === 'password' && (
            <>
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('mouse-hand width-px-20 height-px-30 pos-abs z-1000')}
                style={{ top: '28px', left: '4px' }}
                onClick={() => {
                  if (curType === 'password') {
                    setCurType('text');
                  } else {
                    setCurType('password');
                  }
                }}>
                <Icon type="dashboard" color="black" width={'14'} />
              </Div>
              {curType !== 'password' && <div className={cx(styles.lineThrough)}></div>}
            </>
          )}
        </Div>
      </Div>
    </>
  );
};

export default TextBox;
