import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

const CheckBox = ({ checked = false, onBoxClick }) => {
  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className="width-per-100">
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('box-shadow-type-one bg-white width-px-20 height-px-20 mouse-hand')}
          onClick={onBoxClick}>
          {checked && <Icon type="dashboard" color={'blue'} />}
        </Div>
      </Div>
    </>
  );
};

export default CheckBox;
