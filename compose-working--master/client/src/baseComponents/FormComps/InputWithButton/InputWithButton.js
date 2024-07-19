import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TextBox from '@/baseComponents/FormComps/TextBox';
import Button from '@/baseComponents/ReusableComps/Button';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';

import styles from './InputWithButton.module.scss';

const InputWithButton = ({ val, setVal, placeHolder, name, id, btnText, onBtnClick }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        type="flex"
        className="width-per-100 br-rad-px-20 p-all-16"
        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
        <Div
          type="flex"
          vAlign="center"
          direction={containerWidth < 600 ? 'vertical' : 'horizontal'}
          className="br-rad-px-8 width-per-100">
          <TextBox
            type="text"
            val={val}
            placeholder={placeHolder}
            setVal={setVal}
            name={name}
            id={id}
            hasMarginBottom={false}
            className="width-per-100 br-none"
            hasBoxShadow={false}
            hasBorderRadius={false}
          />
          <Div type="flex" className="height-px-45 height-per-100">
            <Button
              className={cx(containerWidth < 600 ? 'width-per-100' : 'width-px-175')}
              hasBorderRadius={false}
              onClick={onBtnClick}>
              {' '}
              {btnText}
            </Button>
          </Div>
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default InputWithButton;
